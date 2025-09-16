const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'https://example.org', // Replace with your target API
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove '/api' prefix when forwarding
  },
  onProxyRes(proxyRes) {
    proxyRes.headers['x-added'] = 'foobar'; // Add custom header
    delete proxyRes.headers['x-removed']; // Remove unwanted header
  },
});

module.exports = (req, res) => apiProxy(req, res);
