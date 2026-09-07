const express = require("express");
const pool = require("../models/db.js");
const router = express.Router();

// Get all sales
router.get("/sales", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sales");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a sales
router.post("/sales", async (req, res) => {
  const { model, price } = req.body;
  try {
    await pool.query("INSERT INTO sales (model, price) VALUES ($1, $2)", [
      model,
      price,
    ]);
    res.json({ message: "Car added successfully!" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
