const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "massi",
  port: 3306,
  password: "Ismiw_massi1",
  // database: "stock",
});

connection.connect((err) => {
  if (err) {
    console.log("error occured");
  } else {
    var sql = "CREATE DATABASE stock";
    connection.query(sql, (err, result) => {
      console.log("database created", result);
      sql = "USE stock";
      connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("database used", result);
        sql =
          "CREATE TABLE IF NOT EXISTS article (id SMALLINT AUTO_INCREMENT PRIMARY KEY," +
          " titre VARCHAR(100), description TEXT, published INT(1));";
        connection.query(sql, (err, result) => {
          if (err) throw err;
          console.log("Table created", result);
        });
      });
    });
  }
});

module.exports = connection;
