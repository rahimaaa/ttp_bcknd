const express = require("express");
const cors = require("cors");
const db = require("./db");
const PORT = "8080";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/students", router);

// Mount on API
app.use("/api", require("./api"));

// Syncing DB Function
const syncDB = () => db.sync();

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;
