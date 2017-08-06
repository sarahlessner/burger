var connection = require("./connection.js");

var orm = {
	//select all from burger where devoured is 0
	selectAll: function(table, cbFromBurger) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
	      throw err;
	    }
      cbFromBurger(result);
    });

	},
	//insert into burgers (burgerName)
	insertOne: function(table, cols, vals, cbFromBurger) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, cols, vals], function(err, result) {
			if (err) {
	      		throw err;
	    	}
	    	cbFromBurger(result);
		});
	},
	//update burgers set devoured to 1 where id is (this.id)
	updateOne: function(table, colToSearch, ObjColVals, id, cbFromBurger) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(queryString, [table, colToSearch, ObjColVals, id], function(err, result) {
		    if (err) {
		     	throw err;
		    }
		    cbFromBurger(result);
		});
	}
};

module.exports = orm;