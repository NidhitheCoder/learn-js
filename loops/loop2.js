const items = ["Banana", "Apple", "Orange"];

// Traditional for loop
for(let i = 0; i < items.length; i++ ){
  console.log(items[i]);
};

// for of loop
for (const e of items) {
  console.log(e);
};

// Using itterator function
items[Symbol.iterator] = () => {
  let i = 0;
  let arr = this;
  return {
    next: () => {
      if(i >= arr.length){
        return { done: true };
      } else {
        const value = arr[i];
        i++;
        return { value, done: false };
      }
    }
  }
};

// foreach loop
items.forEach(v => console.log(v));

// Helps to print full details of this array items
items.forEach(console.log);