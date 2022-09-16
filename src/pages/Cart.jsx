import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import CartItemsList from '../components/CartItemsList';
import CartTotalDisplay from '../components/CartTotalDisplay';

function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <>
      <div className="container bg-img">
        <div className="pt-3 pb-7 mb-5 min-vh-80">
          {cart.length === 0 ? (
            <h1 className="text-center">No items to display</h1>
          ) : (
            <CartItemsList />
          )}
          <div className="mt-5 mx-auto d-flex justify-content-center">
            <Link to="/shop">
              <button type="button" className="btn btn-secondary">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CartTotalDisplay />
    </>
  );
}

export default Cart;
