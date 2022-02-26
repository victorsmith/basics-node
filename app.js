const http = require('http');
const routerModule = require('./routes');

const server = http.createServer( (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // do shit
    routerModule.routes(req, res);
    res.end()
});

server.listen(3000);

