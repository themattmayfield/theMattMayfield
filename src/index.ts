import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static';
import { portfolioData } from './data/portfolio-data';
import { renderPortfolio } from './templates/portfolio';

const app = new Hono();

app.use(
  '/*',
  serveStatic({
    root: './public',
  })
);

app.get('/', async (c) => {
  const html = await renderPortfolio(portfolioData);
  return c.html(html);
});

export default app;
