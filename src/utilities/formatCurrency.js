function formatCurrency(value) {
  return value.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
}

export default formatCurrency;
