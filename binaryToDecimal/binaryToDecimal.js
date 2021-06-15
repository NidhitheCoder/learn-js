let num = process.argv[2];
let regex = /^[0-1]+$/;

if( num.match(regex) ) {
  let decimal = 0;
  let inc = 1;
  for(let i = num.length-1 ; i >= 0; i--){
    decimal = decimal + (num[i] * inc);
    inc = inc * 2;
  }
  console.log(`decimal of ${num} is ${decimal}`);
} else {
  console.log('You entered a non binary format Number');
}