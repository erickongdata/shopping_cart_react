import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Product from './components/Product';
import NotFound from './components/NotFound';
import productsJson from './products.json';

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

function App() {
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

  const handleAddCartItem = (idNum) => {
    setCart((currCart) => {
      if (currCart.findIndex((item) => item.id === idNum) === -1) {
        return [...currCart, { id: idNum, quantity: 1 }];
      }
      return currCart.map((item) => {
        if (item.id === idNum && item.quantity < itemMaxLimit) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleSubtractCartItem = (idNum) => {
    setCart((currCart) =>
      currCart.map((item) => {
        if (item.id === idNum && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (idNum) => {
    setCart((currCart) => currCart.filter((item) => item.id !== idNum));
  };

  const handleItemNumChange = (idNum, itemQuantity) => {
    setCart((currCart) =>
      currCart.map((item) => {
        if (
          item.id === idNum &&
          itemQuantity > 0 &&
          itemQuantity <= itemMaxLimit
        ) {
          return { ...item, quantity: itemQuantity };
        }
        return item;
      })
    );
  };

  const handleSubmitQuantity = (e, idNum) => {
    e.preventDefault();
    const dropdown = document.querySelector(`[data-id="quant-${idNum}"]`);
    const itemQuantity = +dropdown.value;
    setCart((currCart) => {
      if (currCart.findIndex((item) => item.id === idNum) === -1) {
        return [...currCart, { id: idNum, quantity: itemQuantity }];
      }
      return currCart.map((item) => {
        if (item.id === idNum && item.quantity < itemMaxLimit) {
          return { ...item, quantity: itemQuantity };
        }
        return item;
      });
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar siteTitle={siteTitle} totalNumItems={totalNumItems} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home siteTitle={siteTitle} />} />
            <Route path="/shop" element={<Shop data={data} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  data={data}
                  handleAddCartItem={handleAddCartItem}
                  handleSubtractCartItem={handleSubtractCartItem}
                  handleRemoveCartItem={handleRemoveCartItem}
                  handleItemNumChange={handleItemNumChange}
                  totalPrice={totalPrice}
                />
              }
            />
            <Route
              path="/product/:idNum"
              element={
                <Product
                  data={data}
                  handleSubmitQuantity={handleSubmitQuantity}
                  cart={cart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
