# Twitter Clone Project using MERN Stack

This project contains two main folders: backend, frontend

### Backend

1. The backend uses express for handling api requests and authentication routes.
2. bcryptjs is mainly used for handling password and hashing them in the MongoDB database
3. mongoose helps with managing the MongoDB databases and is used for defining schemas
4. cloudinary is used for storing images
5. cookieParser is used for creating tokens and decoding cookies to ensure that users do not remained logged in for long periods of time and for personalization purposes.
6. jwt (jasonwebtoken) is used for verifying these tokens and protects the route which a user takes by ensuring no other user can access their account (each user has their own token which remains active for 15 days)
