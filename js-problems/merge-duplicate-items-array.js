const mainArray = [[1, 2, 3], [4, 5, 6], [1, 8, 9], [11, 4, 56], [1, 23, 56], [11,2,1], [200,300,400], [500, 11,201]];
const uniqueArray = [];
let result = [];

const uniq = [...new Set(mainArray.flatMap(item => item))];

uniq.map((item, index) => {
    if ([...new Set(result.flatMap(j => j))].includes(item)) {
        return null;
    }

    mainArray.map(it => {

        if (it.includes(item)) {
            result[index] = result[index] ? [...new Set([...result[index], ...it])] : it;
            return;
        }
    })

})


result = result.filter(item => item)
console.log(result)