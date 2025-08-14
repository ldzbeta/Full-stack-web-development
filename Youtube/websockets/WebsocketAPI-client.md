# WebSocket Client Notes ⚡️
Websocket  is a browser API that you can access (very similar to fetch)
Will work in a raw project , React project and Next project (needs to be client side)

[example simple Chat App](https://github.com/hkirat/real-time-chat)
## React (Vite) example — original code  🧩

```ts
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage,setLatestMessage]=useState("");
  const [message,setMessage]=useState("");
  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
    //only run when websocket server is open
      console.log('Connection established');
      newSocket.send('Hello Server!');
      //setting up socket state instance as newSocket or open
          setSocket(newSocket);
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setLatestMessage(message.data);
    }

    return () => newSocket.close();
    // to close websocket when user go other pages
  }, [])

  return (
    <>
    // Setup simple sending and recieving message setup
     <input onChange={()=>{
     setMessage(e.target.value);
     }></input>
<button onClick={()=>{
socket.send("Hellow world");
}}>Send</button>
{latestMessage}
    </>
  )
}

export default App
```
---

## Custom Hook: useSocket 🪝

You can extract the WebSocket logic into a reusable hook. Drop this file in your project (e.g., `useSocket.ts`) and import it into components.


```ts
import { useEffect, useRef, useState } from 'react';

type UseSocketOptions = {
  url: string;
  onOpenMessage?: string; // message to send once connection opens
};

export function useSocket({ url, onOpenMessage }: UseSocketOptions) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState<string | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    socketRef.current = ws;

    ws.onopen = () => {
      console.log('Connection established');
      if (onOpenMessage) ws.send(onOpenMessage);
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log('Message received:', event.data);
      setLatestMessage(event.data);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
      setSocket(null);
      socketRef.current = null;
    };

    ws.onerror = (err) => {
      console.error('WebSocket error', err);
    };

    return () => {
      ws.close();
    };
  }, [url, onOpenMessage]);

  const send = (data: string) => {
    const ws = socketRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      console.warn('WebSocket is not open. ReadyState:', ws?.readyState);
      return;
    }
    ws.send(data);
  };

  return {
    socket,
    latestMessage,
    send,
  };
}

Usage example in a component:

import React, { useState } from 'react';
import { useSocket } from './useSocket';

function Chat() {
  const { latestMessage, send } = useSocket({ url: 'ws://localhost:8080', onOpenMessage: 'Hello Server!' });
  const [message, setMessage] = useState('');

  return (
    <>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => send(message)}>Send</button>
      <div>Latest: {latestMessage}</div>
    </>
  );
}
```
---

## Next.js example — original code  🚀
- Create a fresh next project
- Update `page.tsx` to be a client component
- Add the code to create a socket connection
```ts
"use client"
import { useEffect, useState } from 'react'

export default function() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <>
      hi there
    </>
  )
}
```
---

## Tips & Notes 📝
- WebSocket must be created on the client (browser). In Next.js, ensure the file/component is a client component (`"use client"`).
- Always close the socket in the cleanup of `useEffect` to avoid leaks when components unmount.
- Check `WebSocket.readyState` before sending. States: 0 = CONNECTING, 1 = OPEN, 2 = CLOSING, 3 = CLOSED.
- Consider reconnection/backoff logic for production use.
- For complex apps, add event listeners for `onclose` and `onerror`, and surface connection status via the hook.

---
