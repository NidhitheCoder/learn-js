let text = '';

for(let i =0 ; i < 10; i++){
  if(i === 3){
    continue;
  }
  text = text + i;
}

console.log(text);

//  Use continue with while

let i =0, n =0;
while(i < 5){
i++;
if(i === 3){
  continue;
}
n += i;
}

console.log(n);