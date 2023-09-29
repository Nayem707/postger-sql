/*CREATE DATABASE IN POSTGER-SQL*/
CREATE DATABASE productsdb;

/*DROP TABLE DATABASE IN POSTGER-SQL*/
DROP TABLE product;

/*CREATE A PRODUCTS TABLE IN POSTGER-SQL*/
CREATE TABLE product (
  id VARCHAR(250) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  img VARCHAR(500),
  price NUMERIC(5,2),
  title VARCHAR (200),
  description VARCHAR(500),
  catagory VARCHAR (20),
  amount NUMERIC(1),
  rating NUMERIC(5,2)
);

/*INSERT PRODUCT DATA IN POSTGER-SQL-> productsdb*/
INSERT INTO product (id, name, img, price, title, description, amount, rating)
VALUES (101, x, isalbila-her);

/*INSERT DATA INTO DB*/
INSERT INTO product (id, name, img, price, title, description, amount, rating) 
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *

/*GET DATA INTO DB*/
SELECT * FROM productsdb;

/*DELETE DATA INTO DB*/
DELETE FROM product WHERE id=$1

/*UPDATE DATA INTO DB*/
UPDATE product SET name=$1,img=$2 price=$3, title=$4, description=$5, catagory=$6 amount=$7, rating=$8 WHERE id=$9 RETURNING *