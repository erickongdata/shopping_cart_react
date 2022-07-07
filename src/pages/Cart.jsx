import { useContext } from 'react';
import { AppContext } from '../AppContext';
import CartItemsList from '../components/CartItemsList';
import CartTotalDisplay from '../components/CartTotalDisplay';

function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <div className="cart">
      <div className="container">
        <div className="py-7">
          {cart.length === 0 ? <h1>No items to display</h1> : <CartItemsList />}
        </div>
        <CartTotalDisplay />
      </div>
    </div>
  );
}

export default Cart;
