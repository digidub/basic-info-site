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

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == 'ENOENT') {
        fs.readFile('./404.html', (error, data) => {
          res.writeHead(200);
          res.end(data, 'utf-8');
        });
      }
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`server running at port ${port}`);
});
