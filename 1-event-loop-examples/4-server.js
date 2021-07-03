const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
})

server.listen(8080, () => {
    console.log('Server listening on port : 8080 ...');
})

// listen is asynchronous and it stays alive and keeps listening for the incoming requests (and once they show up it responds to them appropriately)