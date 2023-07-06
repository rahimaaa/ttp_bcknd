const express = require("express");
const router = express.Router();
const { Student } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();

    allStudents
      ? res.status(200).json(allStudents)
      : res.status(404).send("Students List Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/AddStudent", async (req, res, next) => {
  try {
    const createStudent = await Student.create(req.body);
    res.status(201).json(createStudent);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const deletedStudent = await Student.destroy({
      where: {
        id: studentId,
      },
    });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
