/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

/*
  the purpose of this function is to search through all the products to find a matching name and size. if no match is found, the function will return null

  parameters:

    products (object array)
    name (string)
    size (string)

*/
function chooseItemByNameAndSize(products, name, size) {
  let match = null;

  //create a for loop that will iterate throughout the array of objects
  for (let i = 0; i < products.length; i++) {
    //if the name of the current object matches the given name, iterate throughout the sizes
    if (products[i].name === name) {
      const sizes = products[i].availableSizes;

      for (let j = 0; j < sizes.length; j++) {
        //if the current size matches the given size, return that key-value
        if (sizes[j] === size) {
          match = products[i];
        }
      }
    }
  }

  return match;
}

/*
  the purpose of this function to add an object to the cart object. 

  parameters:
    
    product (object array)
    cart (object) (optional)

  conditions: 
    if no cart object exists, it will be created upon calling the array
    if a cart is given and a new item is being added, it will add the item and set the quantity to 1  
    if a cart is given the product being added is already in the cart, increase the quantity by 1
*/
function addProductToCart(product, cart = {}) {
  let isNewCart = !Object.keys(cart).length;

  // Iterate through the product array
  if (isNewCart) {
    cart[product.name] = {
      priceInCents: product.priceInCents,
      quantity: 1,
    };
  } else {
    let itemFound = false;

    // Iterate through the cart items
    for (let itemName in cart) {
      // If there's a matching name, increment the item's quantity by 1
      if (itemName === product.name) {
        cart[itemName].quantity++; // Increment the correct item's quantity
        itemFound = true;
        break; // Exit the loop since the item was found
      }
    }

    // If no matching item is found, simply add the item to the cart
    if (!itemFound) {
      cart[product.name] = {
        priceInCents: product.priceInCents,
        quantity: 1,
      };
    }
  }

  return cart;
}

/*
  the purpose of this function is to loop throughout the cart and return the total price for everything in the cart (multiply the quantity by the priceInCents)

  parameters:

    cart (object)
  
  condtions:

    if the cart is empty, return 0
*/
function calculateTotal(cart) {
  //create a variable to store the total price of all the objects in the cart.
  let total = 0;

  //create a for loop to iterate throughout every key-pair value
  for (let item in cart) {
    //store the price of the item multiplied by the quantity of the item in total
    total += cart[item].priceInCents * cart[item].quantity;
  }

  //return the total
  return total;
}

/*

  the purpose of this function is to print out each item in the cart with its quantity, name, and total. Each item should be connected by a \n. include a total at the end of the receipt

  parameters:

    cart (object)

  conditions:

    if the cart is empty, return null
    use calculateTotal() and printablePrice() in this function

*/
function printReceipt(cart) {
  //create a string array which will hold the message that will be returned
  let receipt = null;

  if (Object.keys(cart).length) {
    receipt = [];

    //create a for loop to iterate throughout every item in the cart
    for (let item in cart) {
      //store the string inside the string array
      receipt.push(
        `${cart[item].quantity}x${item} - ${printablePrice(
          cart[item].priceInCents * cart[item].quantity
        )}`
      );
    }

    let total = calculateTotal(cart);

    receipt.push(`Total: ${printablePrice(total)}`);

    //return the result
    receipt = receipt.join("\n");
  }

  return receipt;
}

let products = [
  {
    name: "Court Sneaker",
    priceInCents: 9800,
    availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
  },
  {
    name: "Relaxed Silk Shirt",
    priceInCents: 9800,
    availableSizes: [0, 10, 12, 2],
  },
  {
    name: "Square-Neck Jumpsuit",
    priceInCents: 8800,
    availableSizes: [6, 10, 14, 2, 12],
  },
];

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
