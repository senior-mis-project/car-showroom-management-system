require("dotenv").config(); // load .env variables

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER, // the user you created in psql
  host: process.env.DB_HOST,
  database: process.env.DB_NAME, // your database name
  password: process.env.DB_PASSWORD, // the password you set
  port: process.env.DB_PORT,
});

module.exports = pool;
