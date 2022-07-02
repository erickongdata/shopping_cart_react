import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import { AppProvider } from './AppContext';
import ScrollToTop from './utilities/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="/product/:productId" element={<Product />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </ScrollToTop>
          </div>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
