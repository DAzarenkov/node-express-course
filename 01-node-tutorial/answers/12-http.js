const http = require("http");

const server = http.createServer((req, res) => {
  res.end(req.url);
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
