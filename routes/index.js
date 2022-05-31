const userRouter = require("./user")
const postRouter = require("./post")
const swaggerRouter = require("./swagger")

module.exports = (app) => {
    app.use(userRouter)
    app.use(postRouter)
    app.use(swaggerRouter)
}