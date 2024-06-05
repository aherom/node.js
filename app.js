const http = require("http")
const remote = require('./remot');
const server = http.createServer(remote);
server.listen(4000);

