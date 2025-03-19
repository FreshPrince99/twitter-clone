import mongoose from 'mongoose';
/*
This script contains the entire user schema (all the components each user has)
*/
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId, // This means a follower will need to be of this mongoDB type (16 characters)
            ref: "User",
            default: []
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }
    ],
    profileImg: {
        type: String,
        default: '',
    },
    coverImg: {
        type: String,
        default: '',
    },
    bio: {
        type:String,
        default:'',
    },
    link: {
        type:String,
        default: '',
    },
    likedPosts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: []
        },
    ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema); // even though we have declared it as User in mongoose it will be labelled as users

export default User;