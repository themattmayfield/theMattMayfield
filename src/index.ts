import { Hono } from 'hono';
import { portfolioData } from './data/portfolio-data.js';
import { renderPortfolio } from './templates/portfolio.js';

const app = new Hono();

app.get('/favicon.ico', (c) => {
  return c.notFound();
});

app.get('/', async (c) => {
  const html = await renderPortfolio(portfolioData);
  return c.html(html);
});

export default app;
