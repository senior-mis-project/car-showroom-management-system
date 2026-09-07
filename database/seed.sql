-- This clears all rows and resets IDs before seeding.
TRUNCATE TABLE sales, cars, customers, employees RESTART IDENTITY CASCADE;

-- Insert demo cars
INSERT INTO cars (model, price) VALUES
  ('Toyota Corolla', 25000),
  ('Honda Civic', 27000),
  ('Ford Focus', 22000),
  ('Chevrolet Malibu', 28000);

-- Insert demo customers
INSERT INTO customers (name, phone) VALUES
  ('Ali Hassan', '01012345678'),
  ('Mona Adel', '01198765432'),
  ('Karim Fathy', '01234567890');

-- Insert demo employees
INSERT INTO employees (name, role) VALUES
  ('Ahmed Saleh', 'Salesman'),
  ('Sara Nabil', 'Salesman'),
  ('Omar Khaled', 'Manager');

-- Insert demo sales (linking cars, customers, salesmen)
INSERT INTO sales (car_id, customer_id, salesman_id) VALUES
  (1, 1, 1),  -- Corolla sold by Ahmed to Ali
  (2, 2, 2),  -- Civic sold by Sara to Mona
  (3, 3, 1);  -- Focus sold by Ahmed to Karim

