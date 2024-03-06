// Problem: find Longest subtext in a string that has no repeated letter.

const text = "abadeabc";
let realResults = []
let result = '';
let newText = text;

text.split('').forEach((element, index) => {
    newText = text.slice(index + 1, text.length);
    console.log(element);
    if (!result.includes(element)) {
        result = result + element
    } else {
        realResults.push(result);
        result = element
    }

    console.log(result)
    console.log('real', realResults)

    // if ()

});

// if (!result) result = text;

// console.log('real result', realResults)


// if (!result.includes(element)) {
//     result = `${result}${element}`;
// } else {
//     console.log('r ==> ', result)
//     realResults.push(result)
//     result = element
// }
