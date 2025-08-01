const { handle } = require('hono/vercel');
const { Hono } = require('hono');

const app = new Hono();

app.get('/favicon.ico', (c) => {
  return c.notFound();
});

app.get('/', async (c) => {
  return c.html('<h1>Hello World</h1>');
});

module.exports = handle(app);