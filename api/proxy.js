import httpProxy from "http-proxy";
import url from "url";

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  const query = url.parse(req.url, true).query;
  const target = query.url;

  if (!target) {
    res.statusCode = 400;
    res.end("Error: Missing ?url= parameter");
    return;
  }

  proxy.web(req, res, { target, changeOrigin: true }, (err) => {
    console.error("Proxy error:", err);
    res.statusCode = 500;
    res.end("Proxy error.");
  });
}
