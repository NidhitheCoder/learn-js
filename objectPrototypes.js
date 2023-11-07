const myObj = {
    city: 'Madrid',
    center: {
        city: "London",
        greet() {
            console.log(`Greetings ${this.city}`)
        }
    }
}

// myObj.center.greet();
// console.log(myObj.toString())

const myDate = new Date();
let object = myDate;

// console.log(Object.getPrototypeOf(object))

do {
    object = Object.getPrototypeOf(object);
    // console.log("____")
    // console.log(object);
    // console.log("_____;")
} while (object)

// Shadowing property
// console.log(myDate.getFullYear())

// console.log(myDate.getYear())

myDate.getYear = function () {
    console.log("something else")
}

// myDate.getYear();

// const personPrototype = {
//     greet() {
//         console.log("Welcome !")
//     }
// }
// console.log(personPrototype)
// personPrototype.greet();

// const carl = Object.create(personPrototype);

// console.log(carl)

// carl.greet();


// Using constructor
const personPrototype = {
    greet() {
        console.log(`Welcome ${this.name}..!`)
    }
}


function Person(name) {
    this.name = name
}

Object.assign(Person.prototype, personPrototype)

const ruben = new Person("Ruben");
const jacob = new Person("Jacob");

ruben.greet();
jacob.greet();
personPrototype.greet();

console.log(Object.hasOwn(ruben, 'name'))
console.log(Object.hasOwn(ruben, 'greet'))

console.log(Object.hasOwnProperty(ruben, 'name')) // Not recommended