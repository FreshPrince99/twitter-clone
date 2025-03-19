import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // this refers to the middleware which runs between request and response (to parse req.body)
app.use(express.urlencoded({ extended: true })); // to parse form data( urlencoded )

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on this port ${PORT}`);
    connectMongoDB();
});