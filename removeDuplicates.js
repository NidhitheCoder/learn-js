const books = [
	{ title: "C++", author: "Bjarne" },
	{ title: "Java", author: "James" },
	{ title: "Python", author: "Guido" },
	{ title: "Java", author: "James" },
];

const ids = books.map(({ title }) => title);
const filtered = books.filter(({ title }, index) => {
	return !ids.includes(title, index + 1)
});

console.log(filtered);