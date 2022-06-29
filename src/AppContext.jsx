import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import productsJson from './data/products.json';

// Get product data from products.json file
const { data } = productsJson;
Object.freeze(data);

const calculateTotalPrice = (productData, cartItems) => {
  const itemPrice = (id) => productData.find((item) => item.id === id).price;
  return +cartItems
    .reduce((total, item) => total + itemPrice(item.id) * item.quantity, 0)
    .toFixed(2);
};

const calculateTotalNumItems = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

export const AppContext = createContext();

export function AppProvider({ children }) {
  const siteTitle = 'Fairy Tale Books';
  // cart is an array of objects with properties - id, quantity
  const [cart, setCart] = useState([]);
  // Store and update cart total price and no. of items
  const totalPrice = useMemo(
    () => calculateTotalPrice(data, cart),
    [data, cart]
  );
  const totalNumItems = useMemo(() => calculateTotalNumItems(cart), [cart]);
  const itemMaxLimit = 99;

  const handleAddCartItem = (id) => {
    setCart((currCart) => {
      if (currCart.find((item) => item.id === id) === undefined) {
        return [...currCart, { id, quantity: 1 }];
      }
      return currCart.map((item) => {
        if (item.id === id && item.quantity < itemMaxLimit) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleSubtractCartItem = (id) => {
    setCart((currCart) =>
      currCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (id) => {
    setCart((currCart) => currCart.filter((item) => item.id !== id));
  };

  const handleItemNumChange = (id, itemQuantity) => {
    setCart((currCart) =>
      currCart.map((item) => {
        if (
          item.id === id &&
          itemQuantity > 0 &&
          itemQuantity <= itemMaxLimit
        ) {
          return { ...item, quantity: itemQuantity };
        }
        return item;
      })
    );
  };

  const handleSubmitQuantity = (e, id) => {
    e.preventDefault();
    const dropdown = document.querySelector(`[data-id="quant-${id}"]`);
    const itemQuantity = +dropdown.value;
    setCart((currCart) => {
      if (currCart.find((item) => item.id === id) === undefined) {
        return [...currCart, { id, quantity: itemQuantity }];
      }
      return currCart.map((item) => {
        if (item.id === id && item.quantity < itemMaxLimit) {
          return { ...item, quantity: itemQuantity };
        }
        return item;
      });
    });
  };

  const context = useMemo(
    () => ({
      siteTitle,
      cart,
      data,
      totalPrice,
      totalNumItems,
      handleAddCartItem,
      handleSubtractCartItem,
      handleRemoveCartItem,
      handleItemNumChange,
      handleSubmitQuantity,
    }),
    [cart]
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
