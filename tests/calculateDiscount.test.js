const {
  calculateDiscount,
  exchangeRateApi,
} = require('../src/calculateDiscount.js');

describe('Web SDK JS Interview', () => {
  test('Exercise 1 - expect calculateDiscount to throw an Error if price is not a number, or a negative one. Also expect the test to throw if typeof input is not a number', () => {
    // in this basic Error test I didn't wrap my function in another anonymous one, that's why it didn't work in the first place, small mistake but it did cost me about ~10/15 min.
    expect(() => calculateDiscount('wrongPrice', 10, 'USD')).toThrow(
      'Invalid price'
    );

    //checking negative price
    expect(() => calculateDiscount(50, -1, 'USD')).toThrow(
      'Invalid discount percentage'
    );

    //checking string instead of number
    expect(() => calculateDiscount(50, 'string', 'USD')).toThrow(
      'Invalid discount percentage'
    );
  });

  test('Exercise 1 - Checking multiple values in - USD', () => {
    expect(calculateDiscount(50, 10, 'USD')).toBe(45);
    expect(calculateDiscount(50, 0, 'USD')).toBe(50);
    expect(calculateDiscount(50, 10)).toBe(45);
  });

  test('Exercise 1 - Checking multiple values in - EUR', () => {
    // this is where i fumbled and it went downhill. I expected this line to return 45 and it would have, but we commented out the last line and returned discountedPrice instead of discountedPrice divided by exchange rate. More explanation inside calculateDiscount.js
    expect(calculateDiscount(50, 10, 'EUR')).toBe(45);
    expect(calculateDiscount(100, 15, 'EUR')).toBe(85);

    // this one is interesting, it will output 110.39999999999999 and it is a matter of further discussion if js function that calculates amount of money should return a number like this.
    expect(calculateDiscount(120, 8, 'EUR')).toBe(110.39999999999999);
  });

  test('Exercise 1 - Checking multiple values in - GBP', () => {
    expect(calculateDiscount(50, 10, 'GBP')).toBe(45);
    expect(calculateDiscount(100, 15, 'GBP')).toBe(85);
  });

  test('Exercise 2 - mock example', () => {
    jest.mock('../src/calculateDiscount');

    const spy = jest
      .spyOn(exchangeRateApi, 'getExchangeRate')
      .mockReturnValue(6.5);

    const rate = exchangeRateApi.getExchangeRate('EUR');
    expect(rate).toBe(6.5);

    const result = calculateDiscount(100, 20, 'EUR');
    // What's funny is at the beginning we multiply it by exchange rate and then divide it by it so all that matters is discount percent and the exchange rate is a joke I didn't catch, but for the sake of it i provided one mock.

    expect(spy).toHaveBeenCalledWith('EUR');
    expect(result).toBe(80);
  });
});
