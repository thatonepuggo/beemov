const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 6952;
const script = fs.readFileSync('index.txt', 'utf8', (err, data) => {
    if (err != null) {
	console.log(`[ERROR] ${err}: ${data}`);
    }
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(script);
});

server.listen(port, host, () => {
    console.log(`Server running on ${host}:${port}`);
});
