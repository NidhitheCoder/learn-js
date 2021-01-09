const random = () => {
  return Promise.resolve(Math.random());
};

// Bad code
// ********

const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;
  return random()
    .then(v => {
      first = v;
      return random();
    })
    .then(v => {
      second = v;
      return random();
    })
    .then(v => {
      third = v;
      console.log(`result ${first + second + third}`);
      return first + second + third;
    });
};

sumRandomAsyncNums();

// Good promise code
// *****************
const sumRandomAsyncNums1 = async () => {
  const first1 = await random();
  const second1 = await random();
  const third1 = await random();
  console.log(`result ${first1 + second1 + third1}`);
};

sumRandomAsyncNums1();
