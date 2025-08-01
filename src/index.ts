import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static';
import { portfolioData } from './data/portfolio-data';
import { renderPortfolio } from './templates/portfolio';

const app = new Hono();

const isDev = process.env.NODE_ENV !== 'production';

app.use(
  '/*',
  serveStatic({
    root: './public',
  })
);

if (isDev) {
  const { watch } = await import('fs');
  
  let hmrClients: Set<ReadableStreamDefaultController> = new Set();

  app.get('/hmr', (c) => {
    return c.streamText(async (stream) => {
      await stream.write('data: connected\n\n');
      hmrClients.add(stream);
      
      return new Promise((resolve) => {
        const cleanup = () => {
          hmrClients.delete(stream);
          resolve();
        };
        
        c.req.raw.signal?.addEventListener('abort', cleanup);
      });
    }, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
  });

  const notifyClients = async () => {
    hmrClients.forEach(async (client) => {
      try {
        await client.write('data: reload\n\n');
      } catch (e) {
        hmrClients.delete(client);
      }
    });
  };

  watch('./src', { recursive: true }, (eventType, filename) => {
    if (filename && (filename.endsWith('.ts') || filename.endsWith('.js'))) {
      console.log(`File changed: ${filename}`);
      setTimeout(notifyClients, 100);
    }
  });

  watch('./public', { recursive: true }, (eventType, filename) => {
    if (filename) {
      console.log(`Static file changed: ${filename}`);
      notifyClients();
    }
  });
}

app.get('/', async (c) => {
  const html = await renderPortfolio(portfolioData);
  
  if (isDev) {
    const htmlWithHMR = html.replace(
      '</body>',
      '<script src="/hmr.js"></script></body>'
    );
    return c.html(htmlWithHMR);
  }
  
  return c.html(html);
});

export default app;
