// Ternary operator
const age = 12;
age > 15 ? console.log('elder') : console.log('Younger');

const age1 = 84;

age1 > 30
  ? age1 > 70 ? console.log('Oldman') : console.log('Your are in between 30 and 69')
  : console.log('You are below 30');
  

// Number to string
const newAge = age + '';
console.log(typeof newAge);

// Fill arrays
const users = Array(5).fill(5);
console.log(users);

// unique arrays
const fruits = ['Apple', 'Orange', 'Melon', 'Grapes', 'Berry', 'Grapes', 'Orange', 'Apple', 'Melon'];

const unique = Array.from(new Set(fruits));
console.log(unique);

// Dynamic objects

const dynamic = "Hobbies";

const user = {
  name: 'Jan',
  mail: 'Jan@mail.com',
  [dynamic]: 'Music',
};

console.log(user);

// Slicing arrays
const items = [ 1, 2, 3, 4, 5, 6, 7];
items.length = 4;
console.log(items);

console.log(items.slice(-2));

// Array to object
const itemsObj = {...items};
console.log(itemsObj);

// Object to arrays
const itemsArray = Object.values(itemsObj);
console.log(itemsArray);

// check the performance
let startAt = performance.now();

// log time taken code
for(let i = 0 ; i < 230000; i++){
  console.log(i)
}

let endAt = performance.now();

console.log(`${endAt - startAt} took milliseconds to execute`);