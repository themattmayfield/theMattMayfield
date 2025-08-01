import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { portfolioData } from './data/portfolio-data';
import { renderPortfolio } from './templates/portfolio';
import { watch } from 'fs';

const app = new Hono();

let hmrClients: Set<ReadableStreamDefaultController> = new Set();

app.use(
  '/*',
  serveStatic({
    root: './public',
  })
);

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

app.get('/', async (c) => {
  const isDev = process.env.NODE_ENV !== 'production';
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

if (process.env.NODE_ENV !== 'production') {
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

export default app;
