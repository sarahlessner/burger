var orm = require("../config/orm.js");

//call ORM functions with burger input

var burger = {
  selectAll: function(cbFromController) {
    orm.selectAll("burgers", function(resFromQuery) {
      cbFromController(resFromQuery);
    });
  },
  insertOne: function(cols, vals, cbFromController) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cbFromController(res);
    });
  },
  updateOne: function(colToSearch, objColValues, id, cbFromController) {
    orm.updateOne("burgers", colToSearch, objColValues, id, function(res) {
      cbFromController(res);
    });
  }
};

// Export the database functions for the controller "burgersController.js).
module.exports = burger;