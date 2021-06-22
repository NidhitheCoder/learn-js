let company = {
  name: "Miracle",
  products: { new : 'Harddisks', base: 'Motherboards' },
  calculatePrice: function () {
    return 30;
  },
  joiningDate: new Date(),
};

// In this method we loss the function that existed in the company object in myCompany Object.
// and also data is print the actual date with data type string.
const myCompany = JSON.parse(JSON.stringify(company));


console.log(company);
console.log(myCompany);

// to avoid this problem we can use the library lodash's deepClone function.