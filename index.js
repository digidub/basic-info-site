// const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200);
    res.end(data);
    return;
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// const server = http.createServer((req, res) => {
//   let filePath;
//   if (req.url === '/') {
//     filePath = 'index.html';
//   } else filePath = '.' + req.url + '.html';

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       if (err.code == 'ENOENT') {
//         fs.readFile('./404.html', (error, data) => {
//           if (error) {
//             console.log(error);
//           }
//           res.writeHead(200);
//           res.end(data);
//           return;
//         });
//       }
//     } else {
//       res.writeHead(200);
//       res.end(data);
//     }
//   });
// });

// server.listen(port, () => {
//   console.log(`server running at port ${port}`);
// });
