// 1. VALUE AND REFERANCE

// Value assingment
let value1 = "My String";
let value2 = value1;
value2 = "My New string";

console.log(value1);
// Output : My String
console.log(value2);
//Output: My New string

// Object assignment
let var1 = { name: "Julia" };
let var2 = var1;
var2.name = "John";

console.log(var1);
// Output : { name: 'John' }
console.log(var2);
//  Output : { name: 'John' }

// 2. CLOSURE

const createGreeter = greeting => {
  return name => {
    console.log(greeting + " " + name);
  };
};


const sayHello = createGreeter("Welcome ");

sayHello('Joe');
sayHello('Julia');