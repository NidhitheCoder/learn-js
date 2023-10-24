const myObj = {
    city: 'Madrid',
    center: {
        city: "London",
        greet() {
            console.log(`Greetings ${this.city}`)
        }
    }
}

myObj.center.greet();
console.log(myObj.toString())