DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(150) NOT NULL,
devoured BOOLEAN default 0,
time_stamp timestamp,
PRIMARY KEY (id)
);