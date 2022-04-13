const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mua-web-be.herokuapp.com',
      changeOrigin: true,
    })
  );
};