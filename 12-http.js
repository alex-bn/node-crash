const http = require('http');


// The createServer method is looking for the callback, in that callback function we have 2 parameters, both of those parameters are objects and a common practice is to call them "req" and "res"
// req -> incoming request object
// res -> what we're sending back object (response to the request)


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page');
    }
    else if (req.url === '/about') {
        res.end('About page');
    } else {
        res.end(`<h1>Oops!</h1><br><h1>The page you are looking for doesn't exist</h1><br><a href ="/">back home</a>`);
    }
});

server.listen(5000, function () {
    console.log('listening on 5000...');
});