let obj = {} // declare an object named obj.

obj = {
  rabbit: "Fun",
  year: 1846,
  whoami: {}
};

// to set a value to object keys
obj['rabbit']= 'Mittu';
console.log(obj['rabbit']);

 // create object using contructor
const obj2 = new Object();
obj2.rabbit= "Judy"; // set property using dot notation

console.log(obj2.rabbit);

//  create object using class
const obj3 = Object.create(obj);
obj3.added= "Added one";

console.log(obj3);
console.log(obj3.year);
console.log(Object.getPrototypeOf(obj3));

// 
const obj4 = Object.create({});
Object.defineProperty(obj4, 'unicorn', { get: () => 'hii', enumerable:false }); //  value: 'Horse',
console.log(obj4.unicorn);

// 
const legs = 5;
const spider = 7;

const obj5 = {
  spider,
  legs,
};

console.log(obj5);