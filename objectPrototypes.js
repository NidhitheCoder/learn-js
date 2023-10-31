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

console.log(Object.getPrototypeOf(object))

do {
    object = Object.getPrototypeOf(object);
    console.log("____")
    console.log(object);
    console.log("_____;")
} while (object)

// Shadowing property
console.log(myDate.getFullYear())

console.log(myDate.getYear())

myDate.getYear = function () {
    console.log("something else")
}

myDate.getYear();