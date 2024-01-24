/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  const cartValues = Object.values(cart);
  let priceTotal = 0;

  for (let i = 0; i < cartValues.length; i++) {
    priceTotal += cartValues[i].priceInCents * cartValues[i].quantity;
  }

  return priceTotal;
}

function printCartInventory(cart) {
  const itemNameAndQuantity = [];
  let result = "";

  for (let item in cart) {
    const itemName = cart[item];
    const itemQuantity = itemName.quantity;

    itemNameAndQuantity.push(`${itemQuantity}x${item}`);
  }

  result = itemNameAndQuantity.join("\n");

  console.log(result);

  return result;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
