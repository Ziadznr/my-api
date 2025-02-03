const express = require("express")
const helloController = require("../controllers/helloController")
const router = express.Router()

router.get("/hello-get", helloController.helloGet)
router.post("/hello-post", helloController.helloPost)

module.exports = router