const Student = require("./student");
const Campus = require("./campus");

// Associations Go Here

// Many to Many
// We set a through table "ShopperShoes" that handles the M-M relationship
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Student,
  Campus,
};
