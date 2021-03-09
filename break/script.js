let num = 6
for (let i = 0; i <num; i++) {
  if (5 % i === 0) {
    console.log("inside if",num, i);
    break;
  } else {
    console.log(num, i);
  }
}
