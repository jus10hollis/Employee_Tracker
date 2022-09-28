DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE employees(
  id INT NOT NULL,
  role_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  employee_name INT NOT NULL,
  on_duty BOOLEAN
  PRIMARY KEY (id)
);

CREATE TABLE departments(
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE staffing_order (
  id INT,
  employee_id INT,
  scheduling_details TEXT,
  FOREIGN KEY (employee_id)
  REFERENCES employees(id)
  ON DELETE SET NULL
);