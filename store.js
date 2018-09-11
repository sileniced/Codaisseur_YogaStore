// TODO:

// var products = [
//   { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
//   { referenceNumber: 1232, name: "Power Mat", price: 20 },
//   { referenceNumber: 1233, name: "Block", price: 30 },
//   { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
//   { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
//   { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
//   { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
//   { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
// ]

var products = [
  {
    department: 'mats',
    products: [
      { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
      { referenceNumber: 1232, name: "Power Mat", price: 20 },
    ]
  },
  {
    department: 'props',
    products: [
      { referenceNumber: 1233, name: "Block", price: 30 },
      { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
    ],
  },
  {
    department: 'clothes',
    products: [
      { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
      { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
    ]
  },
  {
    department: 'books',
    products: [
      { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
      { referenceNumber: 1238, name: "Light On Yoga", price: 10 },
    ]
  }
];

// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = [];
// Declare `products`, the different that you will be selling under each of the departments.

// var printProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents
  // use the printProductsOnScreen function for inspiration
// };

var addProductToCart = function(productNumber) {
  console.log(productNumber);
  // Find the product in the array of objects with the correct reference number
  // Add the product to your shopping cart

  for (var product of products) {
    if (product.referenceNumber === parseInt(productNumber)) {
      shoppingCart.push(product);
      updateShoppingCart();
    }
  }

  // printProductsFromShoppingCart();


  // calculate the total price of your cart, and use it:

};

var checkoutCustomer = function() {
  //replace this with showing a nice goodbye message showing the amount to be paid.
  window.alert(`YOGA IS ALL ABOUT MOTHERFUCKING PEACE AND QUIET, SO PAY ME THE FUCKING ......${getTotalPrice()}...... DOLLARS SO YOU CAN RELAX!`);
  //empty the shopping cart

  shoppingCart = [];
  updateShoppingCart();
};

var updateShoppingCart = function (){
  updateTotalPrice();
  var elements = document.getElementsByClassName('of-shopping-cart');
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
  if (shoppingCart !== []) printCart(shoppingCart);
}

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var getTotalPrice = function () {
  var totalPrice = 0;
  for (var product of shoppingCart) {
    totalPrice += product.price;
  }
  return totalPrice;
}

var updateTotalPrice = function () {
  document.getElementById('total-price').innerText = getTotalPrice();
};

var printProductsOnScreen = function (divName) {
  return function (productsToPrint) {
    for (var product of productsToPrint) {

      // create elements for refNr, name, price, with a class and the proper innerText
      var referenceNumberElement = document.createElement('span');
      referenceNumberElement.className = 'referenceNumber';
      referenceNumberElement.innerText = product.referenceNumber;
      referenceNumberElement.onclick = function () {
        //this method is called when the reference number is clicked
        var productNumber = this.innerHTML;
        //use the reference number to look up the product and add it to
        addProductToCart(productNumber);
      };

      var nameElement = document.createElement('span');
      nameElement.className = 'name';
      nameElement.innerText = product.name;

      var priceElement = document.createElement('span');
      priceElement.className = 'price';
      priceElement.innerText = product.price;

      // Wrap our just created elements in a div
      var productElement = document.createElement('div');
      productElement.className = `product of-${divName}`;

      for (var element of [referenceNumberElement, nameElement, priceElement])
        productElement.appendChild(element);

      // Hang that div on the page
      document.getElementById(divName).appendChild(productElement);
    }
  }
};

var printDepartmentsOnScreen = function (departmentsToPrint) {
  for (var department of departmentsToPrint) {

    var departmentHeaderElement = document.createElement('h2');
    departmentHeaderElement.className = 'department-header';
    departmentHeaderElement.innerText = department.department;

    var header_referenceNumberElement = document.createElement('span');
    header_referenceNumberElement.className = 'header-line product reference-number';
    header_referenceNumberElement.innerText = 'Ref Nr';

    var header_nameElement = document.createElement('span');
    header_nameElement.className = 'header-line product name';
    header_nameElement.innerText = 'Name';

    var header_priceElement = document.createElement('span');
    header_priceElement.className = 'header-line product price';
    header_priceElement.innerText = 'Price';

    var header_divElement = document.createElement('div');
    header_divElement.className = 'department';
    header_divElement.id = `of-${department.department}`

    for (var element of [departmentHeaderElement, header_referenceNumberElement, header_nameElement, header_priceElement])
      header_divElement.appendChild(element);

    document.getElementById('product-overview').appendChild(header_divElement);

    var printDepartmentOverview = printProductsOnScreen(`of-${department.department}`);
    printDepartmentOverview(department.products)

  }
};

var printCart = printProductsOnScreen('shopping-cart');
// var printOverview = printProductsOnScreen('product-overview');

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    // printOverview(products);
    printDepartmentsOnScreen(products);
    document.getElementById("checkout").onclick = function(){
      checkoutCustomer();
    }
  }
};
