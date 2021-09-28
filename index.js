const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  let filePath = '.' + req.url;
  console.log(filePath);
});

server.listen(port, () => {
  console.log(`server running at port ${port}`);
});
