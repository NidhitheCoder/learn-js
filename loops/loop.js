let arr = ["one","two","three"];

for(let i =0; i < arr.length; i++) {
  console.log(arr[i]);
}

for(const  i of arr){
  console.log(i);
}

arr.forEach(console.log);
