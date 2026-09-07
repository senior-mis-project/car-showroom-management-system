const pool = require("./db");

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("PostgreSQL connected! Time:", res.rows[0].now);
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    pool.end();
  }
})();
