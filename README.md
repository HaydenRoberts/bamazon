# Bamazon
Bamazon is a marketplace where the user can choose to purchase products. If the user chooses a product to purchase they will then be able to choose the amount the would like to purchase and be displayed their total amount for the purchase.
## Getting Started
In order to get Bamazon running you must first run a few installs.
### Prerequisites
In order to run Bamazon you must install all packages used in the program (Make sure you are inside the bamazon folder when doing the install and running the program!)
```
npm install
```
## Running Program
Once all packages are installed you can now run the program.
```
node bamazonCustomer.js
```
### Images
1. Starting the program.

![alt text](https://github.com/HaydenRoberts/bamazon/blob/master/images/which-product.png)

2. Prompt user for which product to purchase and the amount they would like to purchase.

![alt text](https://github.com/HaydenRoberts/bamazon/blob/master/images/how-many-units.png)

3. If user types in amount greater than amount in stock the user will be told there is inefficient quantity.

![alt text](https://github.com/HaydenRoberts/bamazon/blob/master/images/inefficient-quantity.png)

4. If there is enough in stock of the product user will be shown how their purchase amount and propted to purchase another item.

![alt text](https://github.com/HaydenRoberts/bamazon/blob/master/images/buy-another-item.png)

5. If yes is selected run program again with updated stock quantity info. If no than end program.

![alt text](https://github.com/HaydenRoberts/bamazon/blob/master/images/end-program.png)
