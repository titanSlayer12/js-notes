('use strict');

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // creating new variable with same name as outer scopes variable
      const firstName = 'John';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you are a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    // add(1, 2);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

/*
var me = 'Jonas';
let job = 'developer';
const year = 1991;

// Functoins
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
console.log(addArrow);
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// console.log(this);

const calcAge = function (birthYear) {
  // console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(2005);

const calcAgeArrow = birthYear => {
  // console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeArrow(2004);

const jeny = {
  year: 2026,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jeny.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jeny.calcAge;
matilda.calcAge();

const f = jeny.calcAge;
matilda.f();

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const self = this; // self or that
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillennial();

    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(1, 2);
addExpr(2, 5, 18, 54);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 2, 3);

let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

const me = {
  name: 'Maqsud',
  age: 17,
};

const friend = me;
friend.age = 20;

console.log(friend, me);
*/
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriag: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Mark', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Tom');
console.log(jessica2, jessicaCopy);
