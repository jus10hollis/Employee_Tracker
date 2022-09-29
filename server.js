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

const fs = require("fs");

async function mainPrompts() {
  inquirer.prompt({
    type: "checkbox",
    name: "intro",
    message: "What would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  });
  // if (USER_INPUT === "view all departments") {}

  // const departmentView = await db.execute("SELECT * FROM departments");
  // console.table(departmentView);
}
//   else if (USER_INPUT === "view all roles") {
//     return console.table(data);
//   } else if (USER_INPUT() === "view all employees") {
//     return console.table(data);
//   } else if (USER_INPUT() === "add a department") {
//     return console.table(data);
//   } else if (USER_INPUT() === "add a role") {
//     return console.table(data);
//   } else if (USER_INPUT() === "add an employee") {
//     return console.table(data);
//   } else if (USER_INPUT() === "update an employee role") {
//     return console.table(data);
//   } else console.log(data);
// });

mainPrompts();
