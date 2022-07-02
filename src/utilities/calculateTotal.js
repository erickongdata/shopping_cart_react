const calculateTotalPrice = (productData, cartItems) => {
  const itemPrice = (id) => productData.find((item) => item.id === id).price;
  return +cartItems
    .reduce((total, item) => total + itemPrice(item.id) * item.quantity, 0)
    .toFixed(2);
};

const calculateTotalNumItems = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

export { calculateTotalNumItems, calculateTotalPrice };
