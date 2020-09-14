const math = require('../math');
const app = require('../app');

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  //calls the original implementation
  expect(app.doAdd(2, 3)).toBe(5);

  // and the spyOn stores the calls to add
  expect(addMock).toHaveBeenCalledWith(2, 3);
});