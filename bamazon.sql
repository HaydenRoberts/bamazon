DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INT(10) NOT NULL,
    stock_quantity INT(10) NOT NULL,

    PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Moon Shoes", "Toys & Games", 30, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Tech", 100, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Medicine Ball", "Fitness", 25, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jump Rope", "Fitness", 15, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("The North Face Jacket", "Clothes", 130, 8);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Office Chair", "Home & Kitchen", 80, 40);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Home & Kitchen", 15, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bowflex Home Gym", "Fitness", 650, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Home & Kitchen", 20, 6);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Puzzle", "Toys & Games", 10, 40);
