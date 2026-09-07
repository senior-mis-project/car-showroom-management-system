const express = require("express");
const pool = require("../models/db.js");
const router = express.Router();

// Get all customers
router.get("/customers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a customers
router.post("/customers", async (req, res) => {
  const { model, price } = req.body;
  try {
    await pool.query("INSERT INTO customers (model, price) VALUES ($1, $2)", [
      model,
      price,
    ]);
    res.json({ message: "Car added successfully!" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
