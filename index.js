const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  let filePath;
  if (req.url === '/') {
    filePath = 'index.html';
  } else filePath = '.' + req.url + '.html';
  console.log(filePath);
});

server.listen(port, () => {
  console.log(`server running at port ${port}`);
});
