// shallow copy
let person1 = { name: 'Joji', hobby: { first: 'Music', second: 'reading'}};

let person2 = person1;
person2.name = "Shaji";

console.log(person1);
console.log(person2);

// To avoid shallow copy
// method 1
let person3 = Object.assign({}, person1);
person3.name = "Shambu";

console.log(person1);
console.log(person3);

// method 2
let person4 = {...person1};
person4.name = "Cristy";

console.log(person1);
console.log(person4);

//  \/ event we use spread operator, the inner items changes reflected in first object.
let person5 = {...person1};
person5.name = "Dude";
person5.hobby.first = "Football";

console.log(person1);
console.log(person5);

// method 3 - this method helps to avoid change inner elements in base object or primary object. deep copy
let person6 = JSON.parse(JSON.stringify(person1));
person6.name = "Helen";
person6.hobby.first = "Cricket";

console.log(person1);
console.log(person6);



