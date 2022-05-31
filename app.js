const express = require("express")
const app = express()
const cors = require("cors")
const expressFileUpload = require("express-fileupload");
const router = require("./routes")

const PORT = process.env.PORT | 9000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// express-fileupload
app.use(expressFileUpload());

//path for profile image
app.use("/static/profile/img", express.static("profiles"));

// router middleware 
router(app)

app.listen(PORT, () => console.log("I am live at " + PORT))