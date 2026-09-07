const express = require("express");
const app = express();
const port = 3000;
const carRoutes = require("./routes/cars");
const customerRoutes = require("./routes/customers");
const employeeRoutes = require("./routes/employees");
const saleRoutes = require("./routes/sales");

app.use(express.json()); // to handle JSON requests

app.use("/", carRoutes);
app.use("/", customerRoutes);
app.use("/", employeeRoutes);
app.use("/", saleRoutes);

app.get("/", (req, res) => {
  res.send("Car Showroom Management System is running!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
