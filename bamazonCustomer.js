var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Peeti16",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    runPurchase();
});

function runPurchase() {
    var query = "SELECT item_id, product_name, price FROM products"
    connection.query(query, function (err, res) {
        for (i = 0; i < res.length; i++) {
            var itemId = res[i].item_id;
            var productName = res[i].product_name;
            var price = res[i].price;
            console.log("\nID: " + itemId);
            console.log("Name: " + productName);
            console.log("Price: " + price);
        }
        startPurchase();
    })
}

function startPurchase() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which product would you like to buy (ID)?",
                name: "id"
            },
            {
                type: "input",
                message: "How many units would you like to buy?",
                name: "units"
            }
        ]).then(function (answers) {
            var productChosen = parseInt(answers.id);
            var amountPurchased = parseInt(answers.units);
            // console.log(productChosen);

            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, { item_id: productChosen }, function (err, res) {
                var amountInStock = res[0].stock_quantity;
                var productName = res[0].product_name;

                if (amountPurchased > amountInStock) {
                    console.log("\nInsufficient quantity! Only " + amountInStock + " left in stock.\n")
                } else {
                    amountInStock = (amountInStock - amountPurchased);
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: amountInStock
                            },
                            {
                                item_id: productChosen
                            }
                        ],
                        function (err) {
                            if (err) throw err;
                        })
                    console.log("\nYou purchased " + amountPurchased + " " + productName + "(s).\n");
                }
                purchaseAgain();
            })
        });
}

function purchaseAgain() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to buy another item?",
                name: "purchaseAgain"
            }
        ]).then(function (answer) {
            if (answer.purchaseAgain === true) {
                startPurchase()
            } else {
                connection.end();
            }
        })
}