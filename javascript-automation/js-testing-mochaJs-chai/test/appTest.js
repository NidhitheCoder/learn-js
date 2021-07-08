const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
  it('app should be return hello', () => {
    assert.equal(app(), 'hello');
  });
});