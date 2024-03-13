const mainArray = [[1, 2, 3], [4, 5, 6], [1, 8, 9], [11, 4, 56], [1, 23, 56], [11, 2, 1], [200, 300, 400], [500, 11, 201], [11,22]];
const uniqueArray = [];
let result = [];

const getUniqueArrayFromArrays = (arr) => [...new Set(arr.flatMap(j => j))]

const uniqueMainArray = getUniqueArrayFromArrays(mainArray);

uniqueMainArray.forEach((item, index) => {
    if (getUniqueArrayFromArrays(result).includes(item)) {
        return null;
    }

    mainArray.forEach(it => {
        if (it.includes(item)) {
            result[index] = getUniqueArrayFromArrays([result[index] || [], it]);
            return;
        }
    })
    console.log('item', item)

})


result = result.filter(item => item)
console.log(result)