// Objects 
const pikachu = {name:"Pikachu"};
const stats = { hp:40,attack:60,defence:40};

// Bad object code
// ***************
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


// Spread syntax in array
let pokemon = ['Arbok','Raichu','Sandshrew'];

// Bad code
// ************
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
console.log(pokemon);

// Good array Code 
// ***************
// push
pokemon = [...pokemon,'Dora',"Buji"];
console.log(pokemon);

// unshift
pokemon = ['Dheera','Spiderman',...pokemon];
console.log(pokemon);

// insert into the middle

pokemon = ['Hulk',...pokemon,'Batman'];
console.log(pokemon);