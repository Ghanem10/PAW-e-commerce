CREATE DATABASE ecommerce;

CREATE TABLE product (
    ProductID SERIAL PRIMARY KEY,
    Title varchar(255),
    Description varchar(255),
    Rate INT,
    Price INT,
    Time Date DEFAULT NOW()
);

INSERT INTO product (Title, Description, Rate, Price)
VALUES
    ('Smartphone', 'A high-end smartphone', 4, 599),
    ('Laptop', 'Powerful laptop for work', 4, 899),
    ('Tablet', 'Sleek and lightweight tablet', 4, 449),
    ('Headphones', 'High-quality headphones', 4, 99),
    ('Smartwatch', 'Fitness and health tracking', 4, 149),
    ('Bluetooth Speaker', 'Portable speaker with great sound', 4, 79),
    ('Wireless Mouse', 'Ergonomic wireless mouse', 4, 29),
    ('In-Ear Earbuds', 'Premium in-ear earbuds', 4, 129),
    ('Gaming Console', 'Next-gen gaming console', 4, 399),
    ('Over-Ear Headphones', 'Comfortable over-ear headphones', 4, 199);

DROP DATABASE ecommerce;
DROP TABLE product;