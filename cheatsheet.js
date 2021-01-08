import { some } from "bluebird";

// Destructuring
let foo = {
bar:2,
baz:3
};

// Old method
let foobar = foo.bar;

// Simple Method
let {bar} = foo;

console.log(foobar);
console.log(bar);

let tenses =["one","two","three"];
let [ firstPerson,,secondPerson] = tenses;

console.log(firstPerson);
console.log(secondPerson);

// // Use mutliple promises
// Promise.all([promise1,promise2]).then((result = [results1,results2]) =>{
//     let [results1] = results;
//     let [results2] = results;
// });

let str =3;
let obj = {
    bar:1,
    str
};

console.log(obj.str);

let name = "Smith";
let age = 24;
//old way
some.method({
    name:name,
    age:age
});
// simple way
some.method({name,age});

// generate own screen
