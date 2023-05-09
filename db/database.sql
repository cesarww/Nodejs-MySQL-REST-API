CREATE DATABASE companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL PRIMARY KEY auto_increment,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
); 

describe employee;

INSERT INTO employee VALUES
(1,"Joe",1000),
(2,"Henry",2000),
(3,"John",3000),
(4,"Sam",4000);