console.log("Number you entered : ")
let num = process.argv[2];
let result = '';
while(num > 0) {
  let rem = parseInt(num %2);
  result = rem + result;
  num = parseInt(num / 2);
}
console.log(result);