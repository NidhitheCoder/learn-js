const orders = [500, 35, 46, 11, 456];

// Bad code
// ************

let total = 0;
const withTax = [];
const highvalue = [];
for (i = 0; i < orders.length; i++) {
  // Reduce
  total += orders[i];
  // map
  withTax.push(orders[i] * 1.1);

  // Filter
  if (orders[i] > 100) {
    highvalue.push(orders[i]);
  }
}
console.log(total);
console.log(withTax);
console.log(highvalue);


// Good code
// *********

// Reduce
const total1 = orders.reduce((acc,cur)=>acc+cur);
// Map
const withTax1 = orders.map(v=>v*1.1);
// filter
const highvalue1= orders.filter(val=>val>100);

console.log(total1);
console.log(withTax1);
console.log(highvalue1);
