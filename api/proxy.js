import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  // The target site you want to proxy traffic to
  const target = "https://example.com"; 

  proxy.web(req, res, { target }, (err) => {
    console.error("Proxy error:", err);
    res.statusCode = 500;
    res.end("Proxy error.");
  });
}
