const { DataTypes} =require("sequelize");
const db = require ("../db");

const Campus = db.define("campus", {
    //insert what the campus attributes are supposed to be
    // ex. 
    size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

module.exports = Campus;