const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CRUD",
});
app.listen("3000", () => {

  console.log("Server started on port 3000");

});



// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});

// Insert employee 1

app.get("/createemployee", (req, res) => {

  let sql =

    "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

  db.query(sql, (err) => {

    if (err) {

      throw err;

    }

    res.send("Employee table created");

  });

});



// Insert employee

app.post("/employee", (req, res) => {

  let post = { name: req.body.name, designation: req.body.designation };

  let sql = "INSERT INTO employee SET ?";

  let query = db.query(sql, post, (err) => {

    if (err) {

      throw err;

    }

    res.send("Employee 1 added");

  });

});

// Update employee

app.post("/updateemployee/:id", (req, res) => {

  let newName = req.body.name;

  let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;

  let query = db.query(sql, (err) => {

    if (err) {

      throw err;

    }

    res.send("Post updated...");

  });

});


// Delete employee

app.get("/deleteemployee/:id", (req, res) => {

  let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;

  let query = db.query(sql, (err) => {

    if (err) {

      throw err;

    }

    res.send("Employee deleted");

  });

});
// app.get("/createemployee", (req, res) => {
// let sql =

//     "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

//   db.query(sql, (err) => {

//     if (err) {

//       throw err;

//     }

//     res.send("Employee table created");

//   });

// });
