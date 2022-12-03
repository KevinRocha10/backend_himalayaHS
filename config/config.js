const { Config } = require("./environment");

module.exports = {
  "development": {
    "username": Config.dbUser,
    "password": Config.dbPassword,
    "database": Config.dbDatabase,
    "host": Config.dbHost,
    "dialect": "mysql"
  },
  "test": {
    "username": Config.dbUser,
    "password": Config.dbPassword,
    "database": Config.dbDatabase,
    "host": Config.dbHost,
    "dialect": "mysql"
  },
  "production": {
    "username": Config.dbUser,
    "password": Config.dbPassword,
    "database": Config.dbDatabase,
    "host": Config.dbHost,
    "dialect": "mysql"
  }
}
