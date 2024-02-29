require("dotenv").config()
const express = require("express")
const app = express()
require("./config/database")
const session = require("express-session")

const methodOverride = require("method-override")
const postRoutes = require("./routes/postsRoutes")
const userController = require("./controllers/userController")
const sessionsController = require("./controllers/sessions")

app.use(express.static("public")); 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use("/posts", postRoutes)
app.use("/users", userController)
app.use("/sessions", sessionsController)

app.get("/", (req,res) => {
    res.redirect("/posts")
})

app.listen(PORT, () => {
    console.log("I am listening 🔊")
})