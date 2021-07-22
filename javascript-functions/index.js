// Declaration
const loves = makeBread(7); // It works..
console.log(loves);

function makeBread(qty) {
  return 'Bread'.repeat(qty);
}

// Function expression
const beers = makeBeers(5); // Error: makeBeers is not defined.
console.log(beers);
const makeBeer = function(qty) {
  return 'Beer'.repeat(qty);
}

// IIFE
(function(){
  console.log("haiii");
}());

// arguments keyword
function fun(comedy, song, play) {
  console.log(arguments);
}

fun("Ha ha", "Ooo la la", "Football");