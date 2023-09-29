/*CREATE DATABASE IN POSTGER-SQL*/
CREATE DATABASE productsdb;

/*CREATE TABLE IN POSTGER-SQL*/
CREATE TABLE product (
  id VARCHAR(250) PRIMARY KEY,
  name VARCHAR (20),
  description VARCHAR(260)
);

/*INSERT DATA POSTGER-SQL*/
INSERT INTO product (id, name, description)
VALUES
(101, x, isalbila her);

/*INSERT DATA INTO DB*/
INSERT INTO product (id, name, description) VALUES ($1,$2,$3) RETURNING *

/*GET DATA INTO DB*/
SELECT * FROM productsdb;

/*DELETE DATA INTO DB*/
DELETE FROM product WHERE id=$1

/*UPDATE DATA INTO DB*/
UPDATE product SET name=$1, description=$2 WHERE id=$3 RETURNING *