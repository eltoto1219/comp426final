const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/token',
    createProxyMiddleware({
      //target: "http://18.215.154.83",
      target: "http://0.0.0.0:5000/token",
      changeOrigin: true,
    })
  );
};
