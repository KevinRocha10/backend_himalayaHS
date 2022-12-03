require("dotenv").config()

module.exports.Config = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    dbDatabase: process.env.DB_DATABASE,
    jwtSecret: process.env.JWT_SECRETO,
    jwtTimeExpire: process.env.JWT_TIEMPO_EXPIRA,
    jwtCookieExpire: process.env.JWT_COOKIE_EXPIRE,
    port: process.env.PORT,
}