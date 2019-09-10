const express = require("express");

// const db = require("../data/db-config.js");

const router = express.Router();

// GET to /api/cars
router.get("/", (request, response) => {
  db("cars")
    .then(cars => {
      response.json(cars);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get cars" });
    });
});

// GET to /api/cars/2

router.get("/:id", (request, response) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then(car => {
      response.json(car);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get car" });
    });
});

// POST to /api/cars

router.post("/", (request, response) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          response.status(201).json(newCarEntry);
        });
    })
    .catch(error => {
      console.log("POST error", error);
      response.status(500).json({ message: "Failed to post data" });
    });
});

module.exports = router;
