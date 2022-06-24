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
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumItems, setTotalNumItems] = useState(0);

  const handleAddCartItem = (idNum) => {
    const prevCart = [...cart];
    const index = prevCart.findIndex((item) => item.id === idNum);
    if (index >= 0) {
      const itemAdded = prevCart[index];
      if (itemAdded.quantity < 99) {
        itemAdded.quantity += 1;
        const newCart = [
          ...prevCart.slice(0, index),
          itemAdded,
          ...prevCart.slice(index + 1),
        ];
        setCart(newCart);
      }
    } else {
      setCart([...prevCart, { id: idNum, quantity: 1 }]);
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
    }
  };

  const handleRemoveCartItem = (idNum) => {
    const prevCart = [...cart];
    const newCart = prevCart.filter((item) => item.id !== idNum);
    setCart(newCart);
  };

  const handleItemNumChange = (idNum, itemQuantity) => {
    const prevCart = [...cart];
    const index = prevCart.findIndex((item) => item.id === idNum);
    const itemSelected = prevCart[index];
    if (itemQuantity > 0 && itemQuantity <= 99) {
      itemSelected.quantity = itemQuantity;
      const newCart = [
        ...prevCart.slice(0, index),
        itemSelected,
        ...prevCart.slice(index + 1),
      ];
      setCart(newCart);
    }
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
