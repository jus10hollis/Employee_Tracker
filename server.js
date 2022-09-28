const express = require("express");
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "123Password",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// Query the database
db.query('SELECT * FROM employees', function (err, results) {
  console.log(results);
});



// Setup command-line prompts


