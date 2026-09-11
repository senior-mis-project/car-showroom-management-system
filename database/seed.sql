-- This clears all rows and resets IDs before seeding.
TRUNCATE TABLE sales, cars, customers, employees RESTART IDENTITY CASCADE;

-- Insert demo cars
INSERT INTO cars (model, price,image, year, engine, mileage, transmission, description) VALUES
  ('Toyota Corolla', 25000,'toyota-corolla-hybrid.jpg', 2021, '2.0L Hybrid', 15000, 'Automatic',  'سيارة اقتصادية موفرة للوقود'),
  ('Honda Civic', 27000,'honda-civic-hatchback-sport-sedan-display-honda-offers-the-civic-with-a-2-0l-direct-injection.jpg', 2022, '2.0L Petrol', 12000, 'Manual', 'سيارة شبابية رياضية'),
  ('Ford Focus', 22000,'yellow-focus-st-parked-on-a-downhill-curvy-road.jpg', 2020, '1.8L Petrol', 30000, 'Automatic', 'سيارة مدمجة عملية'),
  ('Chevrolet Malibu', 28000,'2021-chevrolet-malibu-sedan.jpg', 2021, '2.5L Petrol', 10000, 'Automatic', 'سيارة سيدان عائلية مريحة');

-- Insert demo customers
INSERT INTO customers (name, phone,username,password) VALUES
  ('Ali Hassan', '01012345678', 'ali', 'cust123'),
  ('Mona Adel', '01198765432', 'mona', 'cust456'),
  ('Karim Fathy', '01234567890', 'karim', 'cust789');

-- Insert demo employees
INSERT INTO employees (name, role,username,password) VALUES
  ('Ahmed Saleh', 'Salesman', 'ahmed', 'pass123'),
  ('Sara Nabil', 'Salesman', 'sara', 'pass456'),
  ('Omar Khaled', 'Manager', 'omar', 'pass789');

-- Insert demo sales (linking cars, customers, salesmen)
INSERT INTO sales (car_id, customer_id, salesman_id) VALUES
  (1, 1, 1),  -- Corolla sold by Ahmed to Ali
  (2, 2, 2),  -- Civic sold by Sara to Mona
  (3, 3, 1);  -- Focus sold by Ahmed to Karim

