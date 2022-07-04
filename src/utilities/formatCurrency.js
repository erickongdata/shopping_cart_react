import siteInfo from '../data/siteInfo';

function formatCurrency(value) {
  return value.toLocaleString(siteInfo.language, {
    style: 'currency',
    currency: siteInfo.currency,
  });
}

export default formatCurrency;
