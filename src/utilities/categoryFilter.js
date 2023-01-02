/* eslint no-nested-ternary: 0 */

const getCategories = (data) => {
  const categories = data.map((item) => item.category);
  const unique = [...new Set(categories)];
  return unique;
};

const filterData = (data, category, sorting, searchTerm) => {
  let dataIn;
  if (category === 'all') {
    dataIn = [...data];
  } else if (category === 'search') {
    dataIn = [...data].filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    dataIn = [...data].filter((item) => item.category === category);
  }

  if (sorting === 'az') {
    return dataIn.sort((a, b) =>
      a.title === b.title ? 0 : a.title < b.title ? -1 : 1
    );
  }
  if (sorting === 'za') {
    return dataIn.sort((a, b) =>
      a.title === b.title ? 0 : a.title < b.title ? 1 : -1
    );
  }
  if (sorting === 'price-lh') {
    return dataIn.sort((a, b) => a.price - b.price);
  }
  if (sorting === 'price-hl') {
    return dataIn.sort((a, b) => b.price - a.price);
  }
  return dataIn;
};

export { getCategories, filterData };
