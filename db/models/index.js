const Students= require("./students");
const Campus = require("./campus");

// Associations Go Here

// Many to Many
// We set a through table "ShopperShoes" that handles the M-M relationship
Campus.hasMany(Students);
Students.belongsTo(Campus);

module.exports = {
  Students,
  Campus,
};
