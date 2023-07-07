const Student = require("./student");
const Campus = require("./campus");

// Many to Many
// We set a through table "ShopperShoes" that handles the M-M relationship
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Student,
  Campus,
};
