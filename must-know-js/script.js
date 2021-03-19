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

const createGreeter = (greeting) => {
  return (name) => {
    console.log(greeting + " " + name);
  };
};

const sayHello = createGreeter("Welcome ");

sayHello("Joe");
sayHello("Julia");

// example second

// const apiConnect = (apiKey) => {
//   const get = (route) => {
//     return fetch(`${route}?key=${apiKey}`);
//   };

//   const post = (route, params) => {
//     return fetch(route, {
//       method: "POST",
//       body: JSON.stringify(params),
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//   };

//   return { get, post };
// };

// const api = apiConnect("my-secret-key");

// // No need to include the apiKey anymore.
// api.get("http://www.examples.com/get-point");
// api.get("http://www.examples.com/post-endpoint", { name: "joe" });



// 3. Destructuring 

const obj1 = {
  name:"Joe",
  place:'UK'
}

const {name,place} = obj1;
console.log(name,place);

const {name:Myname,place:Myplace} = obj1;

console.log(Myname,Myplace);

const person = {
  name:"Smith",
  age:24
}

const introduce = ({name,age}) =>{
console.log(`Welcome ${name} you are ${age} Years old.`)
}

introduce(person);



// 4. Spread syntax 

const arr = [22,34,5,9,10,5,2,7,3,355];
const max = Math.max(...arr);

console.log(max);


// 5. Rest operator
const myFun = (...args) =>{
console.log(args[0] , args[1])
}

myFun(1,2,3,4,5);



// 6. Array methods

const arr2 = [1,2,3,4,5,6];
const mapped = arr2.map(item=>item + 10);
console.log(mapped);
