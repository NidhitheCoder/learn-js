const hourse = {
    name:"July",
    age:13,
    size:"Large",
    skills:['Jousting','racing']
};

// Bad string code
// ***************
let bio = hourse.name + ' is a '+ hourse.size + ' hourse skilled in  '+ hourse.skills.join(' & ');
console.log(bio);

// Good string code
// ****************
const {name,size,skills} = hourse;
 let bioTwo = `${name} is a ${size} hourse skilled in ${skills.join(' & ')}`;
 console.log("Bio two");
 console.log(bioTwo);

//  Advanced tag example
const hourseAge = (str,age,name) => {
    const ageStr = age > 5 ? "Old" : "Young";
    return `${str[0]} ${ageStr}  at ${age} years with named ${name}`;
};

const bio2 =  hourseAge`This hourse is ${hourse.age}  ${hourse.name}`;
console.log(bio2);