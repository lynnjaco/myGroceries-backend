DROP DATABASE IF EXISTS groceries_prod;
CREATE DATABASE groceries_prod;

\c groceries_prod;

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