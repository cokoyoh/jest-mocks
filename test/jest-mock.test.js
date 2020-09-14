const math = require('../math');
const app = require('../app');

//mock all functions in math module
jest.mock('../math.js');

test('calls math.add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('calls math.subtruct', () => {
  app.doSubtract(3, 1);
  expect(math.subtract).toHaveBeenCalledWith(3, 1);
});