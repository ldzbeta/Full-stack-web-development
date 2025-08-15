# Redis 🚀

We use Redis to implement Queues and Pub/Sub.

Docs: https://projects.100xdevs.com/tracks/Redis/Redis1

![Redis diagram](https://github.com/user-attachments/assets/46c15478-419d-4761-a5b6-c9624cabc1d1)

Since the worker may have to connect to different WebSocket servers, we use Pub/Sub here to connect to the browser via WebSocket.  
If one user uses different machines, both of them get the same result 🔁

---

## Final Architecture 🏗️
![Architecture 1](https://github.com/user-attachments/assets/1b0f7e69-6b96-4084-9b20-d083ef810b94)  
![Architecture 2](https://github.com/user-attachments/assets/88b72813-e89e-447a-9d4e-6e8c76fe3b46)

- EC is the main backend which pushes code submissions to a queue. A worker consumes from the queue, runs the code, and stores the result in the DB. The main backend then repeatedly checks the DB to get the response — a polling approach ⏳
- In the Pub/Sub approach (illustrated above), the worker can publish results and any interested browser instance can receive them in real time. For example, a platform like LeetCode could add a “lucky” button that grants coins to all users simultaneously via Pub/Sub — instant broadcast 🎉

---

## What is Redis? 🧠
Redis is an open-source, in-memory data-structure store used as a:
- Database
- Cache
- Message broker

![Redis internals](https://github.com/user-attachments/assets/08b49fb6-ddaa-4282-b982-af319f4b9110)  
![Redis use cases](https://github.com/user-attachments/assets/3a77e66c-85e6-4f77-a490-ce85d1054ad8)

---

## Cache invalidation scenario — explanation ⚠️

Assume Redis clears cache every 10 minutes. If an admin creates an event at the 3rd minute, consider these options:

1. Clear the Redis cache, then write data to Postgres  
   - Pros: Ensures cache is clean before DB write, avoids serving stale cached entries immediately after DB update.  
   - Cons: There’s a window where cache is empty and reads may cause extra DB load until cache is repopulated.

2. Update Redis, then update Postgres  
   - Pros: Fast reads from cache immediately reflect new values.  
   - Cons: If the Redis update succeeds but the Postgres update fails, cache and DB become inconsistent (cache has data DB doesn’t). Hard to guarantee eventual consistency without additional safeguards.

3. Update Postgres, then update Redis  
   - Pros: DB is the source of truth; after DB update you refresh cache so both are consistent.  
   - Cons: Between DB update and cache update there’s a small window where readers may get stale data from the old cache. Also requires careful ordering and retry logic to avoid race conditions.

Summary: The first approach avoids stale cache but can cause extra DB load; the second is fast but risks cache/DB divergence; the third favors DB correctness but needs careful handling to prevent short-lived stale reads. Choose based on your SLA for consistency vs. latency and implement retries/locking/invalidations where necessary.
Harkirat said to use 1.
---

## Starting Redis locally with Docker 🐳

Start a Redis container:
docker run --name my-redis -d -p 6379:6379 redis

Notes:
- -d runs the container in the background
- my-redis is the container name
- By default, the Redis image includes the Redis CLI so you can interact with it inside the container

Connect to your container:
1. Get the container ID:
   `docker ps`
2. Open a shell inside the container:
   `docker exec -it <container_id> /bin/bash`
3. Start the Redis CLI:
   `redis-cli`

---

## Basic Redis commands ✨

- `SET user "Unknown"  `
  Stores a key-value pair. Values are strings.

- `HSET user:100 name "John Doe" email ""  `
  Use hashes to store multiple fields for a single key (e.g., user with id 100).

- `LPUSH key value  `
  Push an element to the left side of a list.

- `BRPOP key timeout  `
  Blocking right pop: waits for an element to appear if the list is empty. Example:
  - BRPOP problems 0  → block indefinitely(or upto) until an item is pushed
  - BRPOP problems 30 → block up to 30 seconds, then return if nothing appears
