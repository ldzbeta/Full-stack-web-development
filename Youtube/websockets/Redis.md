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
