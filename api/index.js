import { handle } from 'hono/vercel';
import { Hono } from 'hono';

const app = new Hono();

app.get('/favicon.ico', (c) => {
  return c.notFound();
});

app.get('/', async (c) => {
  return c.html('<h1>Hello World</h1>');
});

export default handle(app);