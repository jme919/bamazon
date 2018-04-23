var mysql = require ("mysql");
var inquirer = require("inquirer");
var item; 
var idChoice;
var newStock;
var inStock;
var tableId;
var totalPrice;
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
//function for presenting questions to customer//
function customerChoice(){
	inquirer.prompt([
	{
		type: "input",
		message: "Please enter the ID # of the product you would like to purchase.",
		name: "product_choice"
	},

	{
		type: "input",
		message: "How many of this item would you like to purchase?",
		name: "amount"
	}]).then(function(choices){
		idChoice = choices.product_choice;
		amountChoice = choices.amount;
		console.log("Checking for availability of item #" + choices.product_choice + " ...........................");
		console.log(" ")
		availability();


	})
}
//function for checking the availabitly of an item//
function availability(){
	for (i = 0; i < item.length; i++) {
		if(item[i].id == idChoice){
			if(item[i].stock_quantity >= amountChoice){
				newStock = item[i].stock_quantity - amountChoice;
				inStock = true;
				console.log("It's your lucky day, we have what you need!")
				changeStock();
				orderTotal();

			}else{
				console.log("Sorry dudes, we are out of that item :( ");
				inStock = false;
				connection.end();
			}
		}
	}
}
//change the stock amount in mysql database//
function changeStock(){
	connection.query("UPDATE products SET ? WHERE ?",[
	{
		stock_quantity: newStock
	},
	{
		id: idChoice

	}

	])
		connection.end();
}
//give the total cost of the order//
function orderTotal(){
	for (i = 0; i < item.length; i++) {
		if(item[i].id == idChoice){
			tableId = i;

		}
	}

	totalPrice = amountChoice * item[tableId].price
	console.log("  ");
	console.log("The total for your purchase is $" + totalPrice + ". Thanks!");
}


