const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: String,
    img: String,
    age: String,
    description: String, 
    trained: Boolean,
    breed: String, 
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }

}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)


module.exports = Post
