import { createContext, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DATA from './data/products';
import useLocalStorage from './hooks/useLocalStorage';
import {
  calculateTotalNumItems,
  calculateTotalPrice,
} from './utilities/calculateTotal';

Object.freeze(DATA);

export const AppContext = createContext();

export function AppProvider({ children }) {
  // cart is an array of objects with properties - id, quantity
  const [cart, setCart] = useLocalStorage('cart', []);
  const [category, setCategory] = useLocalStorage('category', 'all');
  const [sorting, setSorting] = useLocalStorage('sorting', {
    alpha: '',
    price: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const quantityDropdown = useRef();
  const searchBar = useRef();
  // Store and update cart total price and no. of items
  const totalPrice = useMemo(
    () => calculateTotalPrice(DATA, cart),
    [DATA, cart]
  );
  const totalNumItems = useMemo(() => calculateTotalNumItems(cart), [cart]);
  const itemMaxLimit = 99;
  const navigate = useNavigate();

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
    const dropdown = quantityDropdown.current;
    const itemQuantity = +dropdown.value;
    setCart((currCart) => {
      if (currCart.find((item) => item.id === id) === undefined) {
        return [...currCart, { id, quantity: itemQuantity }];
      }
      return currCart.map((item) => {
        if (item.id === id && item.quantity <= itemMaxLimit) {
          return { ...item, quantity: itemQuantity };
        }
        return item;
      });
    });
  };

  const handleSearchItem = (e) => {
    e.preventDefault();
    const search = searchBar.current.value;
    setSearchTerm(search);
    if (search === '') {
      setCategory('all');
    } else {
      setCategory('search');
    }

    navigate('/shop');
  };

  const context = useMemo(
    () => ({
      cart,
      data: DATA,
      totalPrice,
      totalNumItems,
      handleAddCartItem,
      handleSubtractCartItem,
      handleRemoveCartItem,
      handleItemNumChange,
      handleSubmitQuantity,
      handleSearchItem,
      category,
      setCategory,
      sorting,
      setSorting,
      quantityDropdown,
      searchBar,
      searchTerm,
      setSearchTerm,
    }),
    [cart, category, sorting, searchTerm]
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
