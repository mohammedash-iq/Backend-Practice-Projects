const { createServer } = require("node:http");
const simpleserver = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.write(`Hello, ${req.url} !`);
  res.end()
});
simpleserver.listen(8080)
