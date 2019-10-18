
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (id int(11) AUTO_INCREMENT, burger_name varchar(80) NOT NULL, devourded BOOL DEFAULT false, PRIMARY KEY(id) );
describe burgers;
select * from burgers; 
INSERT INTO burgers (burger_name, devourded) VALUES ("Cheese Burger", FALSE);
INSERT INTO burgers (burger_name, devourded) VALUES ("Prime Rib Burger", FALSE);
INSERT INTO burgers (burger_name, devourded) VALUES ("Vegan Burger", FALSE);