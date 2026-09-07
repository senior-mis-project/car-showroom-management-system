# 🚗 Car Showroom Management System

A full‑stack MIS project built with **Node.js (Express)** and **PostgreSQL**, designed to manage cars, customers, employees, and sales in a showroom environment. This project demonstrates database design, REST API development, and backend integration for a real business workflow.

---

## 📖 Project Description

The system models a car showroom where:

- **Salesmen (employees)** sell cars to customers.
- **Managers** supervise salesmen (planned extension).
- **Customers** purchase cars, and transactions are recorded in the sales table.

This project is part of a final‑year MIS portfolio, showcasing backend development, database management, and system design skills.

---

## 📌 What’s Done (Pinned)

- **Database schema** created with tables: `cars`, `customers`, `employees`, `sales`.
- **Seed data** added for cars, customers, employees, and sales.
- **Express.js routes** implemented for CRUD operations:
  - `/cars` → manage car inventory
  - `/customers` → manage buyers
  - `/employees` → manage staff
  - `/sales` → record transactions
- **Database connection** established via `pg` driver with `.env` configuration.
- **App running successfully** with endpoints tested against PostgreSQL.

---

## 🎯 Goals Ahead

- **Validation** → ensure correct fields (e.g., customer has `name`, `phone`).
- **Error handling** → return structured JSON errors.
- **Controllers** → move SQL queries out of routes for cleaner code.
- **Authentication** → add login and role‑based access (salesman vs manager).
- **Reports** → MIS analytics like “total sales per salesman” or “monthly sales trends.”
- **Documentation** → add route map in README or Swagger/OpenAPI docs.
- **Frontend integration** → build a simple UI to interact with the API.

---

## 🧪 How to Run

```bash
git clone https://github.com/senior-mis-project/car-showroom-management-system.git
cd car-showroom-management-system
npm install
node ./backend/app.js
```
