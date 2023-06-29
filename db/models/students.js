const {DataTypes } = require("sequelize");
const db = require("../db");
const DEFAULTUSERIMAGE = " ";
const Students = db.define("students", {
    // ex.
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gpa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
});

module.exports = Students;