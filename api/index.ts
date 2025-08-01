const { handle } = require('hono/vercel');
const app = require('../src/index').default;

exports.runtime = 'edge';

exports.GET = handle(app);
exports.POST = handle(app);
exports.PUT = handle(app);
exports.DELETE = handle(app);
exports.PATCH = handle(app);
exports.HEAD = handle(app);
exports.OPTIONS = handle(app);