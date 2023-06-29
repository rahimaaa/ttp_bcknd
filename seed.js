const db = require("./db");
const { Students, Campus } = require("./db/models");

const seedStudents = [
  { first_name: "Rahima", last_name: "Khabibullaeva", email: "rahimahabib@gmail.com", 
  imageUrl: "fds ", gpa: 4.0},
  { first_name: "Xu", last_name: "Wang", email: "xuWang@mail.com", 
  imageUrl: "sdff ", gpa: 4.0},
  { first_name: "Allan James", last_name: "Lapid", email: "aj@gmail.com", 
  imageUrl: "fsf", gpa: 2.0},
];

const seedCampus = [
  { name:"Brooklyn College", imageUrl:"fdsf ", address: "123 idk street", 
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitijhghgghfjdjhgdjfhgjsbhbhg hghbhbfvhjsbvjhbdfhbvhbvdfvbfv  vhbfhbc  hdbvhbjd vj djhvbjbvjhdbfjvbdfvjhbfjhdbjdhfb dfh hf j"},
  
];
const seed = async () => {
  await Students.bulkCreate(seedStudents);
  await Campus.bulkCreate(seedCampus);
};

seed().then(() => process.exit());