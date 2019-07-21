const http = require("http");
const router = require("./router");

const port = 3002;

const server = http.createServer(router);

server.listen(port, () =>
  console.log(`server up and running on localhost:${port}`)
);
