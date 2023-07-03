const people = ["Sam", "Sara", "Ellisa"];

// // Simplest way
// const peopleCopy = [...people];

// peopleCopy[2] = "new";
// console.log({ original: people, copy: peopleCopy });

// const newPeople = people.with(2, "New"); // Working only the version after v20.0.0
// console.log(newPeople);

const sortedPeople = [...people].sort();
const toSortedPeople = people.toSorted();  // Working only the version after v20.0.0
console.log(people);
console.log(sortedPeople);
console.log(toSortedPeople);
