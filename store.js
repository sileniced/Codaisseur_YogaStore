// TODO:


const departments = [
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
let shoppingCart = [];
// Declare `products`, the different that you will be selling under each of the departments.

// var printProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents
  // use the printProductsOnScreen function for inspiration
// };

const addProductToCart = function(productNumber) {
  console.log(productNumber);
  // Find the product in the array of objects with the correct reference number
  // Add the product to your shopping cart

  for (const department of departments)
    for (const product of department.products)
      if (product.referenceNumber === parseInt(productNumber)) {
        shoppingCart.push(product);
        updateShoppingCart();
      }

  // printProductsFromShoppingCart();


  // calculate the total price of your cart, and use it:

};

const checkoutCustomer = function() {
  //replace this with showing a nice goodbye message showing the amount to be paid.
  window.alert(`YOGA IS ALL ABOUT MOTHERFUCKING PEACE AND QUIET, SO PAY ME THE FUCKING ......${getTotalPrice()}...... DOLLARS YOU OWE ME SO YOU CAN RELAX! GO GO GO GO NOW NOW NOW NOW WHERE'S MY MONEY BITCH!`);
  //empty the shopping cart

  shoppingCart = [];
  updateShoppingCart();
};

const updateShoppingCart = function (){
  updateTotalPrice();
  const elements = document.getElementsByClassName('of-shopping-cart');
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
  if (shoppingCart !== []) printCart(shoppingCart);
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

const getTotalPrice = function () {
  let totalPrice = 0;
  for (const product of shoppingCart) {
    totalPrice += product.price;
  }
  return totalPrice;
};

const updateTotalPrice = function () {
  document.getElementById('total-price').innerText = getTotalPrice();
};

const printProductsOnScreen = function (divName) {
  return function (productsToPrint) {
    for (const product of productsToPrint) {

      // create elements for refNr, name, price, with a class and the proper innerText
      let referenceNumberElement = document.createElement('span');
      referenceNumberElement.className = 'referenceNumber';
      referenceNumberElement.innerText = product.referenceNumber;
      referenceNumberElement.onclick = function () {
        //this method is called when the reference number is clicked
        const productNumber = this.innerHTML;
        //use the reference number to look up the product and add it to
        addProductToCart(productNumber);
      };

      let nameElement = document.createElement('span');
      nameElement.className = 'name';
      nameElement.innerText = product.name;

      let priceElement = document.createElement('span');
      priceElement.className = 'price';
      priceElement.innerText = product.price;

      // Wrap our just created elements in a div
      let productElement = document.createElement('div');
      productElement.className = `product of-${divName}`;

      for (const element of [referenceNumberElement, nameElement, priceElement])
        productElement.appendChild(element);

      // Hang that div on the page
      document.getElementById(divName).appendChild(productElement);
    }
  }
};

const printDepartmentsOnScreen = function (departmentsToPrint) {
  for (const department of departmentsToPrint) {

    let departmentHeaderElement = document.createElement('h2');
    departmentHeaderElement.className = 'department-header';
    departmentHeaderElement.innerText = department.department;

    let header_referenceNumberElement = document.createElement('span');
    header_referenceNumberElement.className = 'header-line product reference-number';
    header_referenceNumberElement.innerText = 'Ref Nr';

    let header_nameElement = document.createElement('span');
    header_nameElement.className = 'header-line product name';
    header_nameElement.innerText = 'Name';

    let header_priceElement = document.createElement('span');
    header_priceElement.className = 'header-line product price';
    header_priceElement.innerText = 'Price';

    let divId = `dept-of-${department.department}`;

    let header_divElement = document.createElement('div');
    header_divElement.className = 'department';
    header_divElement.id = divId;

    for (const element of [departmentHeaderElement, header_referenceNumberElement, header_nameElement, header_priceElement])
      header_divElement.appendChild(element);

    document.getElementById('product-overview').appendChild(header_divElement);

    const printDepartmentOverview = printProductsOnScreen(divId);
    printDepartmentOverview(department.products)

  }
};

const printCart = printProductsOnScreen('shopping-cart');
// var printOverview = printProductsOnScreen('product-overview');

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    // printOverview(products);
    printDepartmentsOnScreen(departments);
    document.getElementById("checkout").onclick = function(){
      checkoutCustomer();
    }
  }
};
