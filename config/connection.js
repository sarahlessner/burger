//   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Initiate MySQL Connection.
exports.connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// module.exports = connection;