DROP DATABASE IF EXISTS groceries_dev;
CREATE DATABASE groceries_dev;

\c groceries_dev;

CREATE TABLE groceries (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 is_organic BOOLEAN,
 quantity INT,
 category TEXT,
 price DECIMAL,
 dateAdded TIMESTAMP,
 expiration TIMESTAMP
);