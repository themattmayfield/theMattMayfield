import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { stream } from 'hono/streaming';
import { portfolioData } from './data/portfolio-data.js';
import { renderPortfolio } from './templates/portfolio.js';
import { watch } from 'fs';

const app = new Hono();

let hmrClients: Set<any> = new Set();

app.use(
  '/*',
  serveStatic({
    root: './public',
  })
);

app.get('/hmr', (c) => {
  c.header('Content-Type', 'text/event-stream');
  c.header('Cache-Control', 'no-cache');
  c.header('Connection', 'keep-alive');
  
  return stream(c, async (stream) => {
    await stream.write('data: connected\n\n');
    hmrClients.add(stream);
    
    return new Promise<void>((resolve) => {
      const cleanup = () => {
        hmrClients.delete(stream);
        resolve();
      };
      
      c.req.raw.signal?.addEventListener('abort', cleanup);
    });
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

  watch('./src', { recursive: true }, (_, filename) => {
    if (filename && (filename.endsWith('.ts') || filename.endsWith('.js'))) {
      console.log(`File changed: ${filename}`);
      setTimeout(notifyClients, 100);
    }
  });

  watch('./public', { recursive: true }, (_, filename) => {
    if (filename) {
      console.log(`Static file changed: ${filename}`);
      notifyClients();
    }
  });
}

export { app };
export default app;
