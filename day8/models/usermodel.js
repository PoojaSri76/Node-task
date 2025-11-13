import mongoose from "mongoose";
const users = new mongoose.Schema({
    username:String,
    mobno: Number,
    city: String
})

const usermodel = mongoose.model("user_details", users);

export default usermodel;