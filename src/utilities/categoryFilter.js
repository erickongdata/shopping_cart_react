/* eslint no-nested-ternary: 0 */

const getCategories = (data) => {
  const categories = data.map((item) => item.category);
  const unique = [...new Set(categories)];
  return unique;
};

const sortAlpha = (data, order) => {
  const dataIn = [...data];
  if (order === '') return dataIn;
  if (order === 'az')
    return dataIn.sort((a, b) =>
      a.title === b.title ? 0 : a.title < b.title ? -1 : 1
    );
  return dataIn.sort((a, b) =>
    a.title === b.title ? 0 : a.title < b.title ? 1 : -1
  );
};

const sortPrice = (data, order) => {
  const dataIn = [...data];
  if (order === '') return dataIn;
  if (order === 'lh') return dataIn.sort((a, b) => a.price - b.price);
  return dataIn.sort((a, b) => b.price - a.price);
};

const filterData = (data, category, sortingAlpha, sortingPrice) => {
  const dataIn = [...data];
  if (category === 'all')
    return sortPrice(sortAlpha(dataIn, sortingAlpha), sortingPrice);

  return sortPrice(
    sortAlpha(
      dataIn.filter((item) => item.category === category),
      sortingAlpha
    ),
    sortingPrice
  );
};

export { getCategories, filterData };
