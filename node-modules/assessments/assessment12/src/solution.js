/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  let product = {};
  for (let i = 0; i < products.length; i++) {
    product = products[i];
    for (let j = 0; j < product.availableSizes.length; j++) {
      if (product.availableSizes[j] === size) {
        result.push(products[i]);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  return products.length > 3;
}

function checkForSizeByName(products, name, size) {
  let found = false;
  let check = false;
  let product = products.length;

  if (!product) return product;

  if (products.length) {
    let item = {};
    let itemSize = [];

    for (let i = 0; i < products.length; i++) {
      item = products[i];

      if (item.name === name) {
        itemSize = item.availableSizes;

        for (let j = 0; j < itemSize.length; j++) {
          if (itemSize[j] === size) {
            check = true;
          }
        }
      }
    }

    return check;
  }

  return found;
}

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
