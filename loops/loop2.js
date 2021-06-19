// const items = ["Banana", "Apple", "Orange"];

// // Traditional for loop
// for(let i = 0; i < items.length; i++ ){
//   console.log(items[i]);
// };

// // for of loop
// for (const e of items) {
//   console.log(e);
// };

// // Using itterator function
// items[Symbol.iterator] = () => {
//   let i = 0;
//   let arr = this;
//   return {
//     next: () => {
//       if(i >= arr.length){
//         return { done: true };
//       } else {
//         const value = arr[i];
//         i++;
//         return { value, done: false };
//       }
//     }
//   }
// };

// // foreach loop
// items.forEach(v => console.log(v));

// // Helps to print full details of this array items
// items.forEach(console.log);

// const mil = 1000000;
// const arr= Array(mil);

// console.time();

// // for(let i = 0; i < mil; i++) {};
// // for(const e of arr) {};
// // arr.forEach(v => null);
// // arr.map(n => null);
// arr.map(v => v).forEach(v => v);

// console.timeEnd();


// // ITTERATE OBJECTS
// const marks = { malayalam: 86, english: 75, hindi: 74 };
// // Using for in loop
// for(const key in marks){
//   console.log(`${key} : ${marks[key]}`);
// };

// //  using for of loop
// for(const v of Object.values(marks)){
//   console.log(v);
// }

// const ram = new Map(
//   Object.entries({ name: 'ram', age: 34, eligible: true })
// );

// for(const v of ram.values()){
//   console.log(v);
// }

const emotions = ['Fear', 'Anger', 'Sadness', 'Joy', 'Disgust', 'Surprise', 'trust', 'Happy'];

// const myFeelings = emotions.filter(v => v !== 'Happy');
// console.log(myFeelings);

// const FaceExpression = myFeelings.map(e => 'Happy');
// console.log(FaceExpression);

// const isHappy = emotions.some(v  => v === 'Happy');
// console.log(isHappy);

// const isEmotions = myFeelings.every(v => v > 'AAA');
// console.log(isEmotions);

const around = emotions.reduce((acc, cur) => {
  return acc + (cur === 'Happy' ? 1 : 0);
}, 0);
console.log(around);

const sortedFeelings = emotions.sort((a, b) => a > b);
console.log(sortedFeelings);

sortedFeelings.splice(6);
console.log(sortedFeelings);