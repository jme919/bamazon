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
//make connection to database and run the displayItems() function//
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayItems();
});


//function to display all of the available items//
function displayItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("Loading Items.......");
    console.log("===========================================================================")
    item = res;
    for (i=0; i < item.length; i++){
    	console.log("Item ID: #" + item[i].id);
    	console.log("Department: " + item[i].department_name);
    	console.log("Product: " + item[i].product_name);
    	console.log("Price: $" + item[i].price);
    	console.log("Stock Quantity: " + item[i].stock_quantity);
    	console.log("===========================================================================")
    }
    customerChoice();

    
  });
}

//function customerChoice(){

//}