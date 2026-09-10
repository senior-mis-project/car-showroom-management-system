const express = require("express");
const app = express();
const port = 3000;
const carroutes = require("./routes/cars");
const customerroutes = require("./routes/customers");
const employeeroutes = require("./routes/employees");
const saleroutes = require("./routes/sales");
const path = require("path");

app.use(express.json()); // to handle json requests

app.use("/api", carroutes);
app.use("/api", customerroutes);
app.use("/api", employeeroutes);
app.use("/api", saleroutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend/src")));

// Serve static files from frontend/public
app.use("/public", express.static(path.join(__dirname, "../frontend/public")));
app.use("/static", express.static(path.join(__dirname, "../frontend/src")));

app.get("/", (req, res) => {
  // res.send("car showroom management system is running!");
  res.sendFile(path.join(__dirname, "../frontend/src/index.html"));
});

app.get("/cars", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/src/cars.html"));
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
