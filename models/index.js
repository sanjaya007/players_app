const { Sequelize } = require('sequelize');
const dbConfig = require("../config/dbConfig")

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DBMS
})

sequelize.authenticate()
.then(() => {
    console.log("Database connected successfully !")
})
.catch((error) => {
    console.log(error)
})

module.exports = sequelize