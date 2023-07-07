const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
require("dotenv").config();

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// const db = new Sequelize(`postgres://postgres:"6120"@localhost:5432/${name}`, {
//   logging: false,
// });
const db = new Sequelize(
  `${process.env.DATABASE_URL}`,
  `${process.env.USER_NAME}`,
  `${process.env.PASSWORD}`,
  {
    host: "localhost",
    dialect:
      "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);

module.exports = db;
