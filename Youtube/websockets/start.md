# How backend systems can talk to each other

Asynchronous processes often run on different servers while the primary server coordinates with them. Microservices are an example: small tasks are distributed across different servers.

![Architecture diagram](https://github.com/user-attachments/assets/01045ef1-1217-4f4b-af9b-201549876d9f)

Below are four common methods for handling work across systems (example: someone buys an item on your website):

1. HTTP request
   - Directly call another backend via HTTP and update data immediately.
2. Queue (message queue)
   - Tasks are placed into a queue. A consumer (worker) takes each task and executes it on another server.
3. WebSocket
   - Persistent, full-duplex connection used to push updates in real time.
4. Pub/Sub (publisher–subscriber)
   - Publish messages to a topic; multiple subscribers receive and process them independently.
   - Distributes tasks to different backends; each backend has its own responsibility.

Notes:
- Queues are usually used for eventual work (background jobs). If immediate processing is required (e.g., UPI/money transfer), a queue might not be appropriate.
- Twilio-like external services are often integrated via queues: you enqueue a job (send SMS) and external service processes it asynchronously. If a task fails, it can be retried by re-queueing.

Types of communication

- Synchronous (strong coupling)
  - HTTP (REST / GraphQL)
  - WebSocket (debated whether synchronous or asynchronous)
- Asynchronous (weak coupling)
  - Messaging queues (e.g., job queues for SMS, emails)
  - Pub/Sub systems
  - Server-Sent Events (SSE)
  - WebSocket (debated)

WebSockets

- WebSockets establish a persistent, full-duplex channel over a single TCP connection between client (usually browser) and server.
  - Both client and server can send events to each other at any time.
- Typically used for browser ↔ server communication rather than server ↔ server.
- Differences vs HTTP:
  - HTTP: client initiates each request; server cannot push unsolicited responses to client. Each HTTP request involves a handshake.
  - WebSocket: connection handshake happens once; then both sides can push messages without repeated handshakes.
- Note: In a typical HTTP server, the server cannot find a given client (browser) unless the client connects; WebSockets solve this by keeping a connection open so the server can push events back to the client.

Quick guidance for choosing a communication method

- Use synchronous HTTP when:
  - The caller needs an immediate response (e.g., check account balance, payment confirmation).
  - Low latency, direct interaction required.
- Use queues (asynchronous) when:
  - Tasks can be processed later or retried on failure (e.g., sending emails, push notifications).
  - You want to decouple services and increase reliability.
- Use Pub/Sub when:
  - You need to broadcast events to many subscribers (e.g., analytics events, notifications).
- Use WebSocket/SSE when:
  - You need real-time updates pushed to the client (e.g., live chat, dashboards).
