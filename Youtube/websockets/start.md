reference : https://projects.100xdevs.com/tracks/ABEC/ABEC-1
how backend systems can talk each other
asynchronous process will run on different server and our primary server contact with such servers
microservices are example of this , in which small tasks are put on different different servers
<img width="1796" height="1496" alt="image" src="https://github.com/user-attachments/assets/01045ef1-1217-4f4b-af9b-201549876d9f" />
image shows 4 different methods we can do to excuting such a case for example some one bought an item from your website
1. just passing http request to backend and update
2. using queue, where one tail will take the instruction and head will take each one and execute on other server
3. websocket
4. Pub sub - publisher subscriber systems
  distribute task to different backend where each backend have it's own function

like seen in image 2 - queue is not used when we need to happen this in immdiately ( money transfer of upi)
twilio is an example for using queue in system where we put our external services, which can take it's own time- so we can rely on them more
failure of task will put task again to queue

Types of communication
Synchronous (Strong coupling)
HTTP (REST/GraphQL)
Websocket (debatable if sync or async)
 
Asynchronous (Weak coupling)
Messaging queues -- messages are generally put queue eg: sms message
Pub subs
Server-Sent Events 
Websocket (debatable if sync or async)

Websockets
WebSockets provide a way to establish a persistent, full-duplex communication(both server and browser can send events each other) channel over a single TCP connection between the client (typically a web browser) and the server
websocket is not usually used for talking between server, genreally used for talk browser to server via http

in http server can't find the user , while browser can find the server - server can talk back but can't push events to browser
in http handshake happens for each request while in websocket only one time
