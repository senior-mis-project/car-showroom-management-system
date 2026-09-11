const express = require("express");
const router = express.Router();
const pool = require("../models/db.js");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check employees
    let result = await pool.query(
      "SELECT * FROM employees WHERE username = $1 AND password = $2",
      [username, password],
    );

    if (result.rows.length > 0) {
      return res.send(
        `Welcome employee ${result.rows[0].name}, role: ${result.rows[0].role}`,
      );
    }

    // Check customers
    result = await pool.query(
      "SELECT * FROM customers WHERE username = $1 AND password = $2",
      [username, password],
    );

    if (result.rows.length > 0) {
      return res.send(
        `Welcome customer ${result.rows[0].name}, phone: ${result.rows[0].phone}`,
      );
    }

    res.status(401).send("Invalid credentials");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// GET route for testing
// router.get("/auth", (req, res) => {
//   res.send("Login endpoint is alive. Use POST to submit credentials.");
// });

module.exports = router;
