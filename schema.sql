DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT(4) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255) NOT NULL,
	price DECIMAL(5,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Sorcerer (vinyl) by Tangerine Dream", "Music - CDs and Vinyl", 160.00, 2);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Battlestar Galactice: The Remastered Collection", "Movies and TV", 25.99, 10);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Arduino for Musicicians", "Books", 35.00, 75);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Make Analog Synthesizers", "Books", 21.84, 80);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Pinsanity Space Shuttle Lapel Pin", "Clothing, Shoes, and Jewelry", 9.95, 150);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Star Wars R2-D2 Bowl Set", "Home and Kitchen", 21.88, 80);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Back To The Future Triliogy Box Set", "Movies and TV", 26.96, 55);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("RR7349 (vinyl) by SURVIVE", "Music - CDs and Vinyl", 25.00, 15);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Pinsanity Origami Unicorn Lapel Pin", "Clothing, Shoes, and Jewelry", 9.95, 100);
INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("Blade Runner: The Final Cut", "Movies and TV", 7.88, 6);