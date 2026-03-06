const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    let requestUrl = url.parse(req.url).pathname;

    switch (requestUrl) {
        case '/':
            res.write(fs.readFileSync('index.html'));
            res.end();
            break;
        case '/home.html':
            res.write(fs.readFileSync('home.html'));
            res.end();
            break;
        case '/about.html':
            res.write(fs.readFileSync('about.html'));
            res.end();
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
    }



    
}).listen(3000);

