const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

// Root here is localhost:8080/api/shoppers/

router.get("/", async (req, res, next) => {
  try {
    const allCampus = await Campus.findAll();

    allCampus
      ? res.status(200).json(allCampus)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/AddCampus", async (req, res, next) => {
  try {
    const createCampus = await Campus.create(req.body);
    res.status(201).json(createCampus);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  try {
    const { campusId } = req.params;
    const deletedCampus = await Campus.destroy({
      where: {
        id: campusId,
      },
    });
    res.status(200).json({ message: "Campus deleted successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
