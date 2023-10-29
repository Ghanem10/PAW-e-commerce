CREATE DATABASE ecommerce;

CREATE TABLE product (
    ProductID SERIAL PRIMARY KEY,
    Title varchar(255),
    Description varchar(255),
    Rate INT,
    Price INT,
    Condition varchar(255),
    Time Date DEFAULT NOW()
);

INSERT INTO product (Title, Description, Rate, Price, Condition)
VALUES
    ('Smartphone', 'A high-end smartphone', 20, 599, 'New Brand'),
    ('Laptop', 'Powerful laptop for work', 30, 899, 'Heavily used'),
    ('Tablet', 'Sleek and lightweight tablet', 18, 449, 'Well used'),
    ('Headphones', 'High-quality headphones', 89, 99, 'Heavily used'),
    ('Smartwatch', 'Fitness and health tracking', 36, 149, 'Well used'),
    ('Bluetooth Speaker', 'Portable speaker with great sound', 4, 79, 'New Brand'),
    ('Wireless Mouse', 'Ergonomic wireless mouse', 76, 29, 'Well used'),
    ('In-Ear Earbuds', 'Premium in-ear earbuds', 93, 129, 'Well used'),
    ('Gaming Console', 'Next-gen gaming console', 55, 399, 'New Brand'),
    ('Over-Ear Headphones', 'Comfortable over-ear headphones', 49, 199, 'Heavily used');

DROP DATABASE ecommerce;
DROP TABLE product;