const myList = [
  'Banana',
  'Orange',
  'Apple',
  'Grapes',
  'Watermelon',
  'Banana',
  'Grapes',
];

// Split a single array into specific number length arrays.
const newArray = _.chunk(myList, 3);

// Difference between two arrays - case sensitive
const diffArr = _.difference(myList, [ 'Banana', 'Orange' ]);

// intersection pick the items have both arrays - if same item is repeated in same arrays it will not consider as a new item.
const intArr = _.intersection(myList, [ 'Grapes', 'Apple' ]);

// Join return a whole string of array values with a separator that we given
const joinArr = _.join(myList, '-');

// without return array items that exclude the given item- we can use multiple items
const excludeArr = _.without(myList, 'Apple','Grapes');

// unique return with values of  array that without duplicate item
const uniqueArr = _.uniq(myList);
console.log(uniqueArr);