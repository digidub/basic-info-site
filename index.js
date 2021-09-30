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

app.get('/about', (req, res) => {
  fs.readFile('about.html', (err, data) => {
    res.writeHead(200);
    res.end(data);
    return;
  });
});

app.get('/contact', (req, res) => {
  fs.readFile('contact.html', (err, data) => {
    res.writeHead(200);
    res.end(data);
    return;
  });
});

app.get('*', (req, res) => {
  fs.readFile('404.html', (err, data) => {
    res.writeHead(200);
    res.end(data);
    return;
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
