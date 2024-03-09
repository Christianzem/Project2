const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")


router.get("/new", (req,res) => {
    res.render("users/new.ejs", {tabTitle: "SIGN UP", currentUser: req.session.currentUser})
})

router.post("/", async(req,res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        const newUser = await User.create(req.body)
        res.redirect("/")
    }catch(err){
        console.log(err)
    }
})

module.exports = router