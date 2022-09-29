const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");

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
db.query("SELECT * FROM employees", function (err, results) {
  console.log(results);
});

const fs = require("fs");

function mainPrompts() {
  inquirer
    .prompt({
      message: "What would you like to do?",
      choices: [
        {
          name: "View all employees",
          value: "viewAll",
        },
        {
          name: "View by department",
          value: "viewDepartment",
        },
        {
          name: "See who is on duty",
          value: "viewDuty",
        },
      ],
    })
    .then((data) => {
      console.log(data);
    });
}
mainPrompts();
