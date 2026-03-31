
// Execution Context and Call Stack
const first = () => {
    console.log("I am first");
    second();
}

const second = () => {
    console.log("I am second");
}

console.log("I am global");
first();
console.log("I am still global");

// Hoisting
console.log(a); // undefined due to hoisting
console.log(b()); // Function b is hoisted, so it can be called before its declaration. It will return 20.


var a = 10;
function b() {
    return 20;
}

console.log(c);
console.log(d);

const c = 30; // This will not be hoisted, so it cannot be accessed before its declaration. It will throw a ReferenceError if we try to access it before this line. 
let d = 40; // This will also not be hoisted, so it cannot be accessed before its declaration. It will throw a ReferenceError if we try to access it before this line.