import { useContext } from 'react';
import { AppContext } from '../AppContext';
import CartItemsList from '../components/CartItemsList';
import CartTotalDisplay from '../components/CartTotalDisplay';

function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <>
      <div className="container bg-img">
        <div className="pt-3 pb-7 mb-5">
          {cart.length === 0 ? <h1>No items to display</h1> : <CartItemsList />}
        </div>
      </div>
      <CartTotalDisplay />
    </>
  );
}

export default Cart;
