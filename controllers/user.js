const UserModel = require("../models/user")
const responder = require("../utils/responder")
const {uploadFile} = require("../utils/common")

const addUser = async (req, res) => {
    try {

        const file = req.files.image
        const imgName = file.name

        const randomHead = Date.now().toString(36)
        const randomTail = Math.random().toString(36).substring(2)

        const fileName = randomHead + randomTail + imgName

        const body = {
            firstname: req.body.firstname.trim(),
            lastname: req.body.lastname.trim(),
            username: req.body.username.trim(),
            password: req.body.password.trim(),
            image: fileName
        }

        console.log(body)

        const userExist = await UserModel.findOne({
            where: {
                username: body.username 
            }
        })

        if(userExist){
            return responder(res, "failed", "Username already exist.")
        }

        const isFileUpload = uploadFile("profiles/", file, fileName)
        if(!isFileUpload){
            return responder(res, "failed", "Something went wrong while uploading the picture.")
        }

        const newUser = await UserModel.create(body)
        responder(res, "success", "Registration Successfull !!", newUser)
    } catch (error) {
        console.log(error)
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.findAll({})

        if(allUsers.length < 1) {
            return responder(res, "failed", "No users found !!")
        }

        responder(res, "success", "All registered users.", {allUsers})
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const body = req.body;
        const isUserAvailable = await UserModel.findOne({
            where: {
                username: body.username
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        if (!isUserAvailable){
            return responder(res, "failed", "Username or password is incorrect.")
        }

        if (isUserAvailable.password !== body.password){
            return responder(res, "failed", "Username or password is incorrect.")
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {addUser, getUsers, loginUser}