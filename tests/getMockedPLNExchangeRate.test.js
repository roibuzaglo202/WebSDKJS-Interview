const { getPLNExchangeRate } = require('../src/getPLNExchangeRate');

jest.mock('../src/getPLNExchangeRate', () => ({
  getPLNExchangeRate: jest.fn(),
}));

describe('Web SDK JS Interview - Exercise 3 - mocked async function', () => {
  //basic mocked api test
  test('should return data when api call is successful', async () => {
    const mockExchangeValue = 130;
    getPLNExchangeRate.mockResolvedValue(mockExchangeValue);

    const result = await getPLNExchangeRate(120, 'EUR');
    expect(getPLNExchangeRate).toHaveBeenCalledWith(120, 'EUR');

    expect(result).toBe(mockExchangeValue);
  });
});
