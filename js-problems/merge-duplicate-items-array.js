const mainArray = [[1, 2, 3], [4, 5, 6], [1, 8, 9]];
let result = [];

mainArray.map((items, index) => {
    console.log(items)

    if (!index) {
        result.push(items)
    }

    items.map((item) => {
        result.map((resultItems, ind) => {
            if (resultItems.includes(item)) {
                result[ind] = [...result[ind], items];
                return;
            }
        })
    })
})

console.log(result)