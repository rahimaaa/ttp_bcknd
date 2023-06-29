const { DataTypes} =require("sequelize");
const db = require ("../db");
const DEFAULTVALUE = " ";

const Campus = db.define("campus", {
    //insert what the campus attributes are supposed to be
    // ex. 
    
    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
});

module.exports = Campus;