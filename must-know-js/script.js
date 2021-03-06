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

const filtered = arr2.filter(el => el === 2 || el ===4);
console.log(filtered);

const reduced = arr2.reduce((tot,el)=> tot + el );
console.log(reduced);

const found = arr2.find(el => el > 4);
console.log(found);


const arr3 = ['Smith','Jack', 'Liya','Sara','John']
const foundIndex = arr3.findIndex(el => el === "Liya");
console.log(foundIndex);

const indexOfItem = arr3.indexOf('John');
console.log(indexOfItem);


const pushed = arr2.push(5);
console.log(pushed);
console.log(arr2);

const poped = arr2.pop();
console.log(poped);
console.log(arr2)

const shifted = arr2.shifted();
console.log(arr2);
console.log(shifted);

const unShifted = arr2.unshift(5,6,7);
console.log(arr2);
console.log(unShifted);

let letters = ['a','c','d','e'];
letters.splice(1,0,'b');
console.log(letters);

const sliced = letters.slice(2, 4);
console.log(sliced);
console.log(letters);

let arr4 = [1,24,5,7,38,8,4];
const sorter= (firstEl,secondEl) => firstEl - secondEl;
arr4.sort(sorter);
console.log(arr4);