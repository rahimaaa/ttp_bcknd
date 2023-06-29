const { Sequelize } = require("sequelize");
const { name } = require("../package.json");


const db = new Sequelize(`postgres://localhost:4321/${name}`, {
  logging: false,
});

module.exports = db;