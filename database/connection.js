const { Config } = require("../config/environment");
const { Sequelize } = require("sequelize");

//Connecting to mysql database
const sequelize = new Sequelize(Config.dbDatabase, Config.dbUser, Config.dbPassword, {
    host: Config.dbHost,
    dialect: "mysql"
});

//Testing connection
(async function () {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }
})();
