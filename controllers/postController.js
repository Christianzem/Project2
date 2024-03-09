const Post = require("../models/posts")

const newForm = (req,res) => {
    try{
        res.render("new.ejs", {
            tabTitle: "New Post",
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

const create = async(req,res) => {
    try{
        req.body.trained = req.body.trained == "on" ? true : false
        const newPost = await Post.create({...req.body, author: req.session.currentUser._id})
        res.redirect("/posts");
    }catch(err){
        console.log(err)
    }
}

const index = async(req,res) => {
    try{
        const Posts = await Post.find({author: req.session.currentUser._id})
        res.render("index.ejs", {
            allPosts: Posts, 
            tabTitle: "Index",
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

const show = async(req,res) => {
    try{
        const index = req.params.id
        const post = await Post.findById(index)
        res.render("shows.ejs", {
            post, 
            tabTitle: post.name,
            currentUser: req.session.currentUser,
        }) 
    }catch(err){
        console.log(err)
    }
}

const destory = async(req,res) => {
    try{
        await Post.findByIdAndDelete({_id: req.params.id, author: req.session.currentUser._id})
        res.redirect("/posts")
    }catch(err){
        console.log(err)
    }
}

const edit = async(req,res) => {
    try{
        const post = await Post.findById({_id: req.params.id, author: req.session.currentUser._id});
        res.render("edit.ejs", {
            post,
            index: req.params.id,
            tabTitle: "Edit Post",
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

const update = async(req,res) => {
    try{
        req.body.trained = req.body.trained == "on" ? true : false
        const index = req.params.id
        const post = await Post.findByIdAndUpdate({_id: req.params.id, author: req.session.currentUser._id}, req.body, {new:true}, )
        res.redirect("/posts")
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    new: newForm, 
    create,
    index, 
    show,
    destory,
    edit,
    update, 
}