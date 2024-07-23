DROP DATABASE IF EXISTS grocery_dev;
CREATE DATABASE grocery_dev;

\c grocery_dev

CREATE TABLE colors (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 in_refrigerator BOOLEAN,
 quantity INT,
 category TEXT,
 price DECIMAL,
 dateAdded TIMESTAMP,
 expiration TIMESTAMP,


);