//Write the following code, one line for each action:
//Create an empty object product
//Add the property name with the value ’Laptop’
//Add the property price with the value 1200
//Change the value of the price to 1000
//Show the product’s name and price on the screen
//Remove the property name from the object

let product = {};
product.name = "Laptop";
product.price = 1200;
console.log("Name: " + product.name + ";\n Price: " + product.price + ";");
product.price = 1000;
console.log("Name: " + product.name + ";\n Price: " + product.price + ";");
delete product.name;
console.log("Name: " + product.name + ";\n Price: " + product.price + ";");