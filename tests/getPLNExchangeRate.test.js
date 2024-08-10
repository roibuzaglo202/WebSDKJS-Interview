const { getPLNExchangeRate } = require('../src/getPLNExchangeRate');

describe('Web SDK JS Interview - Exercise 3 - async function', () => {
  // basic real api tests, network dependent
  test('basic case, should be truthy', async () => {
    await expect(getPLNExchangeRate(120, 'ILS')).resolves.toBeTruthy();
  });

  test('should throw an error for an invalid currency', async () => {
    await expect(getPLNExchangeRate('INVALID')).rejects.toThrow();
  });
});
