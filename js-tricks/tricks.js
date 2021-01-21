// get random item from an array
let items = ["name", 23, 43, 54, "julia", 33, "Hemanth"];

let randomItem = items[Math.floor(Math.random() * items.length)];
// console.log(randomItem);

// Get a random number in a specific range
let max = 30;
let min = 20;
let randomNo = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNo);

// Splitting objects inside an array based on quantity
// let bunches = [ {name:"grapes",quantity:2}]
//  expected result : [{name:"grapes",quantity:1},{name:"grapes",quantity:1}]
let bunches = [
  { name: "grapes", quantity: 2 },
  { name: "orange", quantity: 4 },
  { name: "apple", quantity: 1 }
];

let result = [];

bunches.map(({ name, quantity }) => {
  for (let i = 1; i <= quantity; i++) {
    result = [...result, { name: name, quantity: 1 }];
  }
});

// console.log(result);

// Deep arithmetic
// sum(["1", "five", "2wenty", "thr33"])  expected result: 36
let items2 = ["1", "five", "20wenty", "thre33"];
let sum = 0;
items2.map(item => {
  let prevlet = "";
  for (let i = 0; i < item.length; i++) {
    let letter = parseInt(item[i]);
    if (letter / 0) {
      prevlet = prevlet * 10 + letter;
    } else {
      prevlet = 0;
    }
    let nxtElm = parseInt(item[i + 1]);
    console.log(nxtElm !== NaN);
    (nxtElm !== NaN) !== 1 ? (sum = sum + prevlet) : (sum = sum);
  }
  console.log(sum);
});
