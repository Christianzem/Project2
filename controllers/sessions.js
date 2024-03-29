const bcrypt = require("bcrypt")
const router = require("express").Router()
const User = require("../models/user.js")


router.get("/new", (req,res) => {
    res.render("sessions/new.ejs", {
        tabTitle: "LOGIN",
        currentUser: req.session.currentUser
    })
})

router.post("/", async(req,res) => {
    try{
        const foundUser = await User.findOne({username: req.body.username})
        if (!foundUser){
            res.send("<a href='/'> Sorry, no user found</a>")
        } else if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser
            res.redirect("/")
        } else {
            res.send("<a href='/'>Username or Password is incorrect</a>")
        }
    } catch(err){
        console.log(err)
    }
})

router.delete("/", (req,res) => {
    req.session.destroy(() => {res.redirect("/")})
})
module.exports = router