
var http = require('http');
var app = require('./app');
var colors = require('colors');

var server = http.createServer(app);
server.listen(process.env.PORT || 1337);

server.on('listening', onListening);
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' +  addr : 'port ' + addr.port;
  console.log('Listening on: ' + " " + bind.yellow);
}