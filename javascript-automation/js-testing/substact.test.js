const substract = require('./substract');

test('Properly Substract', () => {
  expect(substract(10, 4)).toBe(6);
  expect(substract(1, 2)).toBe(-1);
})
