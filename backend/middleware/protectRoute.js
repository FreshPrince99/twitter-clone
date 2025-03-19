import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({error: "Unauthorized: No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify if the token is the same

        if(!decoded) {
            return res.status(401).json({error: "Unauthorized: Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password"); // prevents the system from returning the password back to the client

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        req.user = user; // over here we do add the password to the request but we just don't display it in the previous line
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}