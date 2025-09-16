const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
  proxy.web(req, res, { target: 'https://example.com' }); // replace with target URL
};
