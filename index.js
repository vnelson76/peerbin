var server = require('http').createServer(),
    express = require('express'),
    app = express(),
    wss = require('express-ws')(app, server),
    fac = require('./facilitator.js')();

app.use(express.static(__dirname + '/public'));

app.ws('/connect', function(ws, req) {
  ws.on('message', function(inputStr) {
    var input = JSON.parse(inputStr);
    if (input.inst === 'host') {
      var roomId = fac.host(ws);
      ws.send(JSON.stringify({ inst: 'hosting', roomId: roomId }));
    } else if (input.inst === 'join') {
      fac.join(input.roomId, ws, input.message);
    } else if (input.inst === 'send') {
      fac.send(input.roomId, input.clientId, input.message);
    }
  });
});

server.on('request', app);
server.listen(3000, '0.0.0.0',
  function () { console.log('Listening on ' + server.address().port) });