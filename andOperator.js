const suger = "suger";
const water = "water";
const makeCoffee = () => "Coffee ready";
const falsy = false;
const truthy = true;

console.log(suger && water);
console.log(suger && makeCoffee());
console.log(suger && makeCoffee);
console.log(truthy && falsy);
console.log(falsy && truthy);
console.log(suger && falsy);

console.log("Next section with if statement");