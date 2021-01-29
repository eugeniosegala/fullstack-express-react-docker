const server = require('./index');
const port = 9000;

server.listen(port, function () {
    console.log('Server running on port %d', port);
});
