const exchangeRateApi = {
  getExchangeRate: (currencyCode) => {
    const rates = { USD: 1.0, EUR: 0.9, GBP: 0.8 };
    return rates[currencyCode] || 1.0;
  },
};

function calculateDiscount(price, discountPercent, currencyCode = 'USD') {
  if (typeof price !== 'number' || price < 0) {
    throw new Error('Invalid price');
  }
  if (
    typeof discountPercent !== 'number' ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    throw new Error('Invalid discount percentage');
  }

  const exchangeRate = exchangeRateApi.getExchangeRate(currencyCode);
  const priceInUSD = price * exchangeRate;
  const discountAmount = priceInUSD * (discountPercent / 100);
  const discountedPrice = priceInUSD - discountAmount;

  // Misunderstood the last line and the function in general on the fundamental level. Didn't catch the joke :)

  return discountedPrice / exchangeRate;
}

module.exports = { calculateDiscount, exchangeRateApi };
