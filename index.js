const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    let requestUrl = url.parse(req.url, true);

    switch (requestUrl.pathname) {
        case '/':
            res.write(fs.readFileSync('index.html'));
            res.end();
            break;
        case '/style.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(fs.readFileSync('style.css'));
            res.end();
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
    }
}).listen(8080);

