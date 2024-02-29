const router = require("express").Router()
const postsCtrl = require("../controllers/postController")
const isAuthenticated = require("../controllers/isAuthenticated")

router.use(isAuthenticated)

router.get("/", postsCtrl.index)
router.get("/new", postsCtrl.new)
router.post("/", postsCtrl.create)
router.get("/:id", postsCtrl.show)
router.delete("/:id", postsCtrl.destory)
router.get("/:id/edit", postsCtrl.edit)
router.put("/:id", postsCtrl.update)

module.exports = router