const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, Worl!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
