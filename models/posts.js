const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: String,
    img: String,
    age: String,
    description: String, 
    trained: Boolean,
    breed: String, 
    // #1 Source: https://dev.to/alexmercedcoder/mongodb-relationships-using-mongoose-in-nodejs-54cc (Relationship - one to many and schema)
    // #2 Source: https://mongoosejs.com/docs/schematypes.html ("type" reference)
    author: {
        type: mongoose.Types.ObjectId, 
        ref: "User",
    }

}, {timestamps: true})

const Post = mongoose.model("Post", postSchema)


module.exports = Post
