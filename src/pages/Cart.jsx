import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import toGBP from '../utilities/formatCurrency';

function Cart() {
  const {
    cart,
    data,
    handleAddCartItem,
    handleSubtractCartItem,
    handleRemoveCartItem,
    handleItemNumChange,
    totalPrice,
  } = useContext(AppContext);
  // Get item data from json data file
  const itemSelected = (id) => data.find((item) => item.id === id);

  return (
    <div className="cart">
      <div className="container">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <p>No items to display</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="mb-5">
              <Link to={`/product/${item.id}`} className="lead text-dark">
                <h5>
                  {itemSelected(item.id).title}, id: {item.id}
                </h5>
              </Link>
              <p className="text-secondary">
                quantity: {item.quantity}, price:{' '}
                {toGBP(itemSelected(item.id).price * item.quantity)}
              </p>
              <button
                type="button"
                onClick={() => handleSubtractCartItem(item.id)}
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                max="99"
                onChange={(e) => handleItemNumChange(item.id, +e.target.value)}
              />
              <button type="button" onClick={() => handleAddCartItem(item.id)}>
                +
              </button>
              <button
                type="button"
                onClick={() => handleRemoveCartItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <h2>Total: {toGBP(totalPrice)}</h2>
      </div>
    </div>
  );
}

export default Cart;
