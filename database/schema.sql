CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  model VARCHAR(100),
  price NUMERIC(10,2)
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(20)
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  car_id INT REFERENCES cars(id),
  customer_id INT REFERENCES customers(id),
  salesman_id INT REFERENCES employees(id),
  sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
