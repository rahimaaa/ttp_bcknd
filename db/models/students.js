const {DataTypes } = require("sequelize");
const db = require("../db");

const Students = db.define("students", {
    // ex.
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
});

module.exports = Students;