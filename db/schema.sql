DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE roles(
  id INT NOT NULL,
  role_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  employee_name INT NOT NULL,
  on_duty BOOLEAN
);

CREATE TABLE departments(
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL
);