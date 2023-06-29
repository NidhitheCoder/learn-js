const people = ["Sam", "Sara", "Ellisa"];

const peopleCopy = [...people];

peopleCopy[2] = "new";
console.log({ original: people, copy: peopleCopy });
