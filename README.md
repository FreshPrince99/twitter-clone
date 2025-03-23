# Twitter Clone Project using MERN Stack

This project contains two main folders: backend, frontend

### Backend

1. The backend uses express for handling api requests and authentication routes.
2. bcryptjs is mainly used for handling password and hashing them in the MongoDB database
3. mongoose helps with managing the MongoDB databases and is used for defining schemas
4. cloudinary is used for storing images
5. cookieParser is used for creating tokens and decoding cookies to ensure that users do not remained logged in for long periods of time and for personalization purposes.
6. jwt (jasonwebtoken) is used for verifying these tokens and protects the route which a user takes by ensuring no other user can access their account (each user has their own token which remains active for 15 days)

### Pictures of the web service:
**HomePage:**

![image](https://github.com/user-attachments/assets/20d62c11-3438-41f1-9a28-521a3a696fa4)

**NotificationsPage:**

![image](https://github.com/user-attachments/assets/d41a53c9-101a-49f9-8232-0b8905afc241)

**ProfilePage:**

![image](https://github.com/user-attachments/assets/609f58d3-bc79-456b-a186-a5760d6eeb0b)

