// if n = 8
// 8/2 = 4 (reminder 0)
// 4/2 = 2 (reminder 0)
// 2/2 = 1 (reminder 0)

// if reminder is not 0 in any step , 'n' is not a power of two 
// if the reminder is 0 and 'n' comes down to 1 eventually, n is a power of two.

// const isPowerOftwo = (n) => {

//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }

//   return true;
// };

// console.log(isPowerOftwo(1));
// console.log(isPowerOftwo(2));
// console.log(isPowerOftwo(5));

// Big-O = O(logn)


const isPowerOfTwoBitwise = (n) => {
  if(n < 1) {
    return false;
  }
  return (n & n-1) === 0
};


console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));

// Big O = O(1)
