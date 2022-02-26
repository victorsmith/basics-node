const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    // do shit
    res.end()

});

server.listen(3000);

