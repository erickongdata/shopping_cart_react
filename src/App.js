import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import productsJson from './products.json';

const { books } = productsJson;

function App() {
  const [cart, setCart] = useState([]);

  const handleAddCartItem = (idNum) => {
    const prevCart = [...cart];
    const index = prevCart.findIndex((item) => item.id === idNum);
    if (index >= 0) {
      const newCart = prevCart.filter((item) => item.id !== idNum);
      const itemAdded = prevCart[index];
      itemAdded.quantity += 1;
      newCart.push(itemAdded);
      setCart(newCart);
      console.log('added more to cart');
    } else {
      setCart([...prevCart, { id: idNum, quantity: 1 }]);
      console.log('added to cart');
    }
  };

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
            <Route path="/cart" element={<Cart cart={cart} books={books} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
