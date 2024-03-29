const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  // for (let i = 2; i < n; i++) {       // Big-O is O(n)
  for(let i = 2; i <= Math.sqrt(n); i++) {     // optimal solution // Big-O is O(sqrt(n))
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O is O(n)