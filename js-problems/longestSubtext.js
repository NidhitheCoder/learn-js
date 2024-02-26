// Problem: find Longest subtext in a string that has no repeated letter.

const text = "abcdcefgacda";
let result = '';
let lastIndex = 0;
let newText = text;
let duplicates = [];

text.split('').forEach((element, index) => {
    let j = false;
    newText = text.slice(index + 1, text.length);
    newText.split('').forEach((item, index2) => {
        val = text.slice();

        if (element === item || duplicates.includes(item)) {
            const val = text.slice(index, index2 + 1)
            if (result.length < val.length) {
                result = val
            }
        } else {
            duplicates.push(item)
        }
        index = index2 + 1;
        j = true;
        return;


        if (j) {
            j = false
            return;
        }
    })

});

if (!result) result = text;

console.log(result)
