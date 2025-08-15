# Redis
We use Redis to implement Queues and Pubsub 🚀  
[Docs](https://projects.100xdevs.com/tracks/Redis/Redis1)
![image](https://github.com/user-attachments/assets/46c15478-419d-4761-a5b6-c9624cabc1d1)

since the worker may have to connect to different websocket servers. so we use Pub sub here to connect to browser via websocket.  
if one user itself uses different machine both of them gate same result 🔁

### Final Architecture 🏗️
![image](https://github.com/user-attachments/assets/1b0f7e69-6b96-4084-9b20-d083ef810b94)
---
![image](https://github.com/user-attachments/assets/88b72813-e89e-447a-9d4e-6e8c76fe3b46)
- EC is main backend where it pushes submission of code to queue and worker will take it from queue and run and the result will be stored in db, main backend will  
repeatedly checking db to get response - polling approach ⏳
- while in pubSub approach as in image, even leetcode can add lucky button for coins to all the users through pubsub at that time 🎉
---
- Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker
<img width="994" height="593" alt="image" src="https://github.com/user-attachments/assets/08b49fb6-ddaa-4282-b982-af319f4b9110" />
<img width="1350" height="872" alt="image" src="https://github.com/user-attachments/assets/3a77e66c-85e6-4f77-a490-ce85d1054ad8" />
here the redis clear cache after every 10min , if admin come and make an event at 3rd min , 
1.clear the redis, put data in postgres
2. update the redis , update the postgres,
3. update the postgres, update the redis,
the first one you have to do others have it's own demerits, explain
