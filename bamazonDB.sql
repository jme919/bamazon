DROP DATABASE IF EXISTS  bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100)  NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Radio", "Electronics", 25.00, 42 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Back Pack", "School Supplies", 30.00, 12 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket", "Clothing", 33.00, 103 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoodie", "Clothing", 20.00, 102 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 12.00, 54 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 225.00, 75 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoes", "Clothing", 45.00, 24 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Kitchen", 75.00, 42 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Kitchen", 35.00, 73 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Juicer", "Kitchen", 100.00, 22 );


SELECT * FROM products; 