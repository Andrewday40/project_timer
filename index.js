var express = require('express');
var server = express();

server.use(express.static(__dirname+'/public'));

server.get('/', function(response, request){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(8080);
