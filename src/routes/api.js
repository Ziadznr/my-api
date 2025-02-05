const express = require("express")
const helloController = require("../controllers/helloController")
const studentsController = require("../controllers/studentsController")

const router = express.Router()

router.get("/hello-get", helloController.helloGet)
router.post("/hello-post", helloController.helloPost)

// mongoose
router.post('/InsertData', studentsController.InsertData)
router.get('/ReadStudents', studentsController.ReadStudent)
router.post('/UpdateStudents/:id', studentsController.UpdateStudents)
router.post('/DeleteStudents/:id', studentsController.DeleteStudent)
module.exports = router