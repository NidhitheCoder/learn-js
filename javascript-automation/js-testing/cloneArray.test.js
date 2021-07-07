const clone = require('./cloneArray');

test('Poperly clones array', () => {
  const arr = [1, 2, 3];
  expect(
    clone(arr)
  ).toStrictEqual(arr)

  expect(
    clone(arr)
  ).not.toBe(arr)

});
