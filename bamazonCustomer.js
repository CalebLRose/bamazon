var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'bamazon_db'
});

connection.connect(function(err){
	if(err)throw err;
	startQuery()
});

function startQuery(){
	console.log("\n---------------------------------------------------\n");
	console.log("Welcome to Bamazon\n"); 
	connection.query("SELECT * FROM products ORDER BY department_name",function(err,res) {
		// for (var i = 0; i < res.length; i++) {
		// 	console.log("ID "+res[i].item_id+": "+res[i].product_name+", "+res[i].department_name+", $"+res[i].price+", "+res[i].stock_quantity+" available\n");
		// };
		console.log(res);
		console.log("\n---------------------------------------------------\n");
		promptPurchase(res);
	});
};

function promptPurchase(inventory){
	inquirer
	.prompt([
		{
			type: "input",
			name: "choice",
			message: "Type the ID of the Item you would like to purchase (press Q to quit)",
			validate: function(val){
				return !isNaN(val) || val.toLowerCase()==="q";
			}
		}
	])
	.then(function(val){
		checkQuit(val.choice);
		var choiceId = parseInt(val.choice);
		var product = checkInventory(choiceId, inventory);
		if(product){
			promptQuantity(product);
		} else {
			console.log("\nI'm sorry, we don't have that.");
			startQuery();
		}
	});
};

function promptQuantity(product){
	inquirer
	.prompt([
		{
			type: "input",
			name: "quantity",
			message: "How many would you like? (press Q to quit)",
			validate: function(val){
				return val > 0 || val.toLowerCase()==="q";
			}
		}
	])
	.then(function(val){
		checkQuit(val.quantity);
		var quantity = parseInt(val.quantity);
		if(quantity > product.stock_quantity){
			console.log("\nWe don't have enough to fill your order.");
			startQuery();
		} else {
			checkout(product,quantity);
		}
	});
};

function checkout(product,quantity) {
	connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantity,product.item_id], function(err, res){
		if (err) throw err;
		console.log("Purchase made! "+quantity+" of "+product.product_name+"s will ship soon");
		startQuery();
		}
	);
};

function checkInventory(choiceId, inventory){
	for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
  }
  return null;

};

function checkQuit(choice){
	if(choice.toLowerCase() === "q") {
		console.log("See you next time");
		process.exit(0);
	}
}