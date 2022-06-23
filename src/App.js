import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import productsJson from './products.json';

const { books } = productsJson;

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddCartItem = (idNum) => {
    const prevCart = [...cart];
    const index = prevCart.findIndex((item) => item.id === idNum);
    if (index >= 0) {
      const itemAdded = prevCart[index];
      itemAdded.quantity += 1;
      const newCart = [
        ...prevCart.slice(0, index),
        itemAdded,
        ...prevCart.slice(index + 1),
      ];
      setCart(newCart);
      console.log('added more to cart');
    } else {
      setCart([...prevCart, { id: idNum, quantity: 1 }]);
      console.log('added to cart');
    }
  };

  const handleSubtractCartItem = (idNum) => {
    const prevCart = [...cart];
    const index = prevCart.findIndex((item) => item.id === idNum);
    const itemSelected = prevCart[index];
    if (itemSelected.quantity > 1) {
      itemSelected.quantity -= 1;
      const newCart = [
        ...prevCart.slice(0, index),
        itemSelected,
        ...prevCart.slice(index + 1),
      ];
      setCart(newCart);
      console.log('subtract item from cart');
    }
  };

  const handleRemoveCartItem = (idNum) => {
    const prevCart = [...cart];
    const newCart = prevCart.filter((item) => item.id !== idNum);
    setCart(newCart);
  };

  const calculateTotalPrice = () => {
    const amount = cart.reduce(
      (total, item) =>
        total + books.find((book) => book.id === item.id).price * item.quantity,
      0
    );
    setCartTotal(amount.toFixed(2));
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={
                <Shop books={books} handleAddCartItem={handleAddCartItem} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  books={books}
                  handleAddCartItem={handleAddCartItem}
                  handleSubtractCartItem={handleSubtractCartItem}
                  handleRemoveCartItem={handleRemoveCartItem}
                  totalPrice={cartTotal}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
