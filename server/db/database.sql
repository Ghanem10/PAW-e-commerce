CREATE DATABASE ecommerce;

CREATE TABLE product (
    ProductID SERIAL PRIMARY KEY,
    Title varchar(15),
    Description varchar(255),
    Rate INT,
    Price INT,
    Time Date DEFAULT NOW()
);

DROP DATABASE ecommerce;
DROP TABLE product;