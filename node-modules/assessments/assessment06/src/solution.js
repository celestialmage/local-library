/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  //define the amount of items in the array
  const itemCount = products.length;
  //configure empty list to push the products to
  const itemList = [];
  //configure the result that will be defined in the following function
  let result = "";

  //if there are no items in the array, result equals the following message
  if (itemCount === 0) {
    result = "There are no items for sale.";
  }

  //if there is 1 item in the array, result equals the following message
  else if (itemCount === 1) {
    result = `There is ${itemCount} item for sale: ${products[0].name}.`;
  }

  //if there are 2 items in the array, result equals the following message
  else if (itemCount === 2) {
    result = `There are ${itemCount} items for sale: ${products[0].name} and ${products[1].name}.`;
  }

  //for all other scenarios, result equals the following message
  else {
    //iterates throughout the entire array to create a list of all the items in products
    for (let i = 0; i < itemCount; i++) {
      itemList.push(products[i].name);
    }

    //here, result lists the amount of items and compiles the strings in to a list using template literals
    result = `There are ${itemCount} items for sale: ${itemList.join(", ")}.`;
  }

  //returns the result
  return result;
}

module.exports = {
  listAllItems,
};
