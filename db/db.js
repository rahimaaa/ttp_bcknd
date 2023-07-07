const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
require("dotenv").config();
const db = new Sequelize(
  `${process.env.DATABASE}`,
  `${process.env.USER_NAME}`,
  `${process.env.PASSWORD}`,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = db;
