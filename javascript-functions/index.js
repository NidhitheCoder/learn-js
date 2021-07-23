// // Declaration
// const loves = makeBread(7); // It works..
// console.log(loves);

// function makeBread(qty) {
//   return 'Bread'.repeat(qty);
// }

// // Function expression
// const beers = makeBeers(5); // Error: makeBeers is not defined.
// console.log(beers);
// const makeBeer = function(qty) {
//   return 'Beer'.repeat(qty);
// }

// // IIFE
// (function(){
//   console.log("haiii");
// }());

// // arguments keyword
// function fun(comedy, song, play) {
//   console.log(arguments);
// }

// fun("Ha ha", "Ooo la la", "Football");

// Arrow functions - arrow functions have there is no this objects
const makeWine = (qty) => "Wine".repeat(qty);
console.log(makeWine(6));

function dog() {
  let self = this;
  this.breed = "Wolf";
  setTimeout(function () {
    console.log(this.breed);
    console.log(self.breed);
  }, 0);
}

function cat() {
  this.color = "White";
  setTimeout(() => {
    console.log(this.color);
  }, 0);
}

dog();
cat();

// Pure functions

let x = 0;

const impure = () => {
  x++;
  return x ** 2;
};

const impure2 = () => {
  x--;
  return x.toString();
};

console.log(impure());
console.log(impure2());

const pure = (x) => x+3;
console.log(pure(4));