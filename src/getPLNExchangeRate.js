async function getPLNExchangeRate(value, outputCurrency = 'ILS') {
  const availableCurrenciesList = ['ILS', 'USD', 'EUR', 'GBP'];

  if (!value || typeof value !== 'number' || value < 0) {
    throw new Error('Invalid value provided');
  }

  if (!availableCurrenciesList.includes(outputCurrency)) {
    throw new Error('Currency not supported');
  }

  try {
    // National Polish Bank api
    const response = await fetch(
      `http://api.nbp.pl/api/exchangerates/rates/A/${outputCurrency}/`
    );

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    const exchangeRate = data.rates[0].mid;
    const calculatedValue = (value * exchangeRate).toFixed(2);

    return calculatedValue;
  } catch (err) {
    console.error('Error in getPLNExchangeRate:', err);
  }
}

module.exports = { getPLNExchangeRate };
