// .js

const exchangeRateApi = {
    getExchangeRate: (currencyCode) => {
      const rates = { 'USD': 1.0, 'EUR': 0.9, 'GBP': 0.8 };
      return rates[currencyCode] || 1.0; 
    }
};

function calculateDiscount(price, discountPercent, currencyCode) {
    return 0;
}

module.exports = calculateDiscount;