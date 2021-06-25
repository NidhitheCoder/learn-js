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