import { Sequelize } from "sequelize";

const db = new Sequelize("syshimalaya", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
