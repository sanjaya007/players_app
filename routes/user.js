const express = require("express")
const router = express.Router()
const { addUser, getUsers, loginUser } = require("../controllers/user")

router.post("/user/add", addUser)
router.get("/users/all", getUsers)
router.post("/user/login", loginUser)

module.exports = router
