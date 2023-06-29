const express = require("express");
const router = express.Router();
const { Students } = require("../db/models");

// Root here is localhost:8080/api/shoes/
router.get("/", async (req, res, next) => {
  try {
    // Shoes.findAll() ===  SELECT * FROM students
    const allStudents = await Students.findAll();

    allStudents
      ? res.status(200).json(allStudents) 
      : res.status(404).send("Shoes List Not Found"); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;