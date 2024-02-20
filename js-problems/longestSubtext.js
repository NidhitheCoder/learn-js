// Problem: find Longest subtext in a string that has no repeated letter.

const text = "abssc";
let result = '';
let lastIndex = 0;

text.split('').forEach((element, index) => {
    const newText = text.slice(index, text.length);
    newText.split('').forEach((item, index2) => {
        console.log(item, element)
        // if (item === element) {
        //     lastIndex = index2;
        //     result = text.slice(index, lastIndex);
        //     return;
        // }
    })
});

console.log(result);
