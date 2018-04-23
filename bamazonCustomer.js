var mysql = require ("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	//My Username
	user: "root",

	//My password
	password: "Goldengirls1!",
	database: "bamazonDB"


});

connection.connect(function(err){
	if (err) throw err;
	runSearch();
});