// Objects 
const pikachu = {name:"Pikachu"};
const stats = { hp:40,attack:60,defence:40};
// Bad object code
pikachu['hp']=stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defence'] = stats.defence;
console.log(pikachu);

// OR 
const lvl0 = Object.assign(pikachu,stats);
console.log(lvl0);
const lvl1 = Object.assign(pikachu,{hp:40});
console.log(lvl1);

// Good Object code
const lvl11 = {...pikachu,...stats};
console.log(lvl11);
const lvl12 = {...pikachu,hp:35};
console.log(lvl12);