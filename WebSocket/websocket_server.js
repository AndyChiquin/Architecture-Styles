const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8765 });

wss.on('connection', ws => {
  ws.send('Hello, WebSocket!');

  ws.on('message', message => {
    console.log(`Message received: ${message}`);
    ws.send(`Message received: ${message}`);
  });
});

console.log('WebSocket server running on ws://localhost:8765');
