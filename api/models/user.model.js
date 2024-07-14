import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true,
        unique: true,
    }, 
    email: {
        type: String, 
        require: true,
        unique: true,
    }, 
    password: {
        type: String, 
        require: true,
    }, 
    profilePicture: {
        type: String,
        default: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png",
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema)

export default User;