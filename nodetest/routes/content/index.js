var express = require("express")
var router = express.Router()
const contentController = require("../../controllers/contentController")

router.get("/", contentController.readAll)
router.post("/", contentController.createContent)

module.exports = router
