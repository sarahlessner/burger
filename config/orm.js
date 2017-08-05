var connect = require("./connection.js");

function selectAll() {
	connection.query("SELECT * FROM burgers", function(err, result) {
		if (err) {
      		throw err;
    	}
    	res.render("index", { burgers: data });
	});

}

function insertOne() {
	connection.query("INSERT INTO burgers (name) VALUES (?)", [req.params.name], function(err, result) {
		if (err) {
      		throw err;
    	}
    	res.redirect("/");
	});
}

function updateOne() {
	connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.body.name, req.body.id], function(err, result) {
    if (err) {
     	throw err;
    }
    res.redirect("/");
}