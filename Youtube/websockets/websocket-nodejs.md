# WebSocket + Node.js (ws) — Setup Notes

## Initialize project
- Initialize an empty Node.js project:
  - `npm init -y`

## TypeScript setup
- Add a tsconfig:
  - `npx tsc --init`
- Create `src` folder:
  - `mkdir src`
- Update `tsconfig.json`:
  - `"rootDir": "./src",`
  - `"outDir": "./dist",`

## Install ws
- `npm i ws @types/ws`

## Example: Using Node `http` library with `ws`
```ts
import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
 //if any one creates connection following code will execute
 // ws - socket instance
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
    // for every client on websocket server broadcast
      if (client.readyState === WebSocket.OPEN) {
    // if connection to user is open
        client.send(data, { binary: isBinary });
      }
    });
  });

  //above .on are represent event responses
  ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
```

## Example: Using Express with `ws`
- Install Express types:
  - `npm install express @types/express`

```ts
import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });
```

## Notes / Tips
- Ensure `tsconfig.json` includes `"esModuleInterop": true` (or use compatible import syntax) to avoid default import issues with some modules.
- Build and run:
  - `npx tsc` to compile to `./dist`
  - `node dist/index.js` (or whichever compiled entry file)
- For production, consider graceful shutdown handling and error handling for WebSocket connections.
- If using Express middleware (static files, JSON parsing, etc.), set those up on `app` before calling `app.listen`.

```bash
tsc -b
# Compile TypeScript project to JavaScript

node dist/index.js
# Run the server
```
