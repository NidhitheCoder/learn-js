// #1 console
const foo = {name:"Smith",age:23};
const bar = {name:"Sara",age:22};

// Bad way to console multiple things
console.log(foo);
console.log(bar);

// good way to console mutliple things
console.log('%c My Friends','color:red;font-weight:bold');
console.log({foo,bar});

// console.table(...)
console.table([foo,bar]);

// console.time
console.time("looper");
let i =0;
while(i<10000000) {i ++};
console.timeEnd("looper");

// Stack trace logs
const deleteMe = () => console.trace('bye bye database');
deleteMe();
deleteMe();

// #2 Destructuring
const dog = {
    name:"Bob",
    legs:4,
    age:10,
    meal:4,
    diet:"chicken"
};

// Bad code
function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} Kilos of ${animal.diet}`;
}

console.log("Bad feeding");
console.log(feed(dog));

// Good code
function feedGood({name,meal,diet}){
    // or destructure inside function like : let {name,meal,diet} = animal;
return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log("Good feeding");
console.log(feedGood(dog));


