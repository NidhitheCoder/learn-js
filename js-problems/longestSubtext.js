// Problem: find Longest subtext in a string that has no repeated letter.

const text = "abaacda";
let result = '';
let lastIndex = 0;
let newText = text

text.split('').forEach((element, index) => {
    newText = newText.slice(index + 1, newText.length);
    newText.split('').forEach((item, index2) => {
        if (item === element) {
            lastIndex = index2 + 1;
            val = text.slice(index, lastIndex);
            if (result.length < val.length) {
                console.log(val)
                result = val;
            }
            return;
        }
    })
});

if (!result) result = text;

console.log(result)
