const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8765');

ws.on('open', function open() {
  ws.send('Hello, server!');
});

ws.on('message', function incoming(data) {
  console.log(`Response from server: ${data}`);
});
