import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Product from './components/Product';
import NotFound from './components/NotFound';
import productsJson from './products.json';

function App() {
  // Get product data from products.json file and assign to variable 'data'
  const { data } = productsJson;
  // cart is an array of objects with properties - id, quantity
  const [cart, setCart] = useState([]);
  // Store and update cart total price and no. of items
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumItems, setTotalNumItems] = useState(0);
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

  const calculateTotalPrice = () => {
    const itemPrice = (id) => data.find((item) => item.id === id).price;
    const amount = cart.reduce(
      (total, cartItem) => total + itemPrice(cartItem.id) * cartItem.quantity,
      0
    );
    setTotalPrice(amount.toFixed(2));
  };

  const calculateTotalNumItems = () => {
    const totalNum = cart.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalNumItems(totalNum);
  };

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalNumItems();
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Navbar siteTitle="Fairy Tale Books" totalNumItems={totalNumItems} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home siteTitle="Fairy Tale Books" />} />
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
                  handleAddCartItem={handleAddCartItem}
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
