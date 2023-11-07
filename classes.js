class Person {
    name;

    constructor(name) {
        console.log(name)
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi, Iam ${this.name}`);
    }
}

const smith = new Person("Smith");
smith.introduceSelf();

// Omitting constructors
class Animal { // Here no need to do any initialization so here we are not using constructor
    sleep() {
        console.log("Zzzzz..")
    }
}

const dog = new Animal();
dog.sleep();


// Inheritance

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My Name is ${this.name} and i will be your ${this.teaches} Professor`)
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1)
        console.log(`For subject ${paper} you earned ${grade} out of 10`)
    }
}

const james = new Professor('James', 'Science')

james.introduceSelf();

james.grade("Maths");


//  Encapsulation
class Student extends Person {
    #year; // Private data property. declaration must start with #.
    isAble;
    constructor(name, year) {
        super(name)
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hi I'm ${this.name}, and I am in year ${this.#year}`)
    }

    canStudyArchery() {
        this.isAble = this.#year > 1;
        return this.#year > 1;
    }
}

const summers = new Student('Summer', 2);

summers.introduceSelf();
console.log(summers.name)
summers.canStudyArchery();

// summers.#year; // This will return an error 
console.log(summers.isAble);