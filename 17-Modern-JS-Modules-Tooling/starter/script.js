/////////////////////////////////////////////
// Working with modules

// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread 🍞', 5);
// console.log(price, tq);

console.log('Importing module ✈');
// console.log(shoppingCost); returns error

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread 🍞', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza 🍕', 2);
add('bread 🍞', 5);
add('potatoes 🥔', 3);
add('chocolate 🍫', 1);
add('ice cream 🍦', 1);

console.log(cart);

/*
// console.log('Start fetching')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data[0]);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/////////////////////////////////////////////
// The module pattern

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({
      product,
      quantity,
    });
    console.log(
      `${quantity} ${product} added to the cart 🛒 (shipping cost is ${shoppingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier 🛒`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('pizza 🍕', 2);
ShoppingCart2.addToCart('bread 🍞', 5);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shoppingCost);
*/

/////////////////////////////////////////////
// CommonJS modules

/*
// Export
export.addToCart = function (product, quantity) {
  cart.push({
    product,
    quantity,
  });
  console.log(
    `${quantity} ${product} added to the cart 🛒 (shipping cost is ${shoppingCost})`
  );
};

// Import
const { addToCart} = require('./shoppingCart.js');
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread 🍞', quantity: 5 },
    { product: 'pizza 🍕', quantity: 2 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClonse = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClonse);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' || null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime'