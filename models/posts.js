const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: String,
    age: {type: String, required: true},
    description: String, 
    trained: Boolean,
    breed: String, 
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)

module.exports = Post