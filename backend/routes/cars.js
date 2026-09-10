const express = require("express");
const pool = require("../models/db.js");
const router = express.Router();

// Get all cars
router.get("/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get one car by ID
router.get("/cars/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars WHERE id = $1", [
      req.params.id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send("Car not found");
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a car
router.post("/cars", async (req, res) => {
  const { model, price } = req.body;
  try {
    await pool.query("INSERT INTO cars (model, price) VALUES ($1, $2)", [
      model,
      price,
    ]);
    res.json({ message: "Car added successfully!" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
