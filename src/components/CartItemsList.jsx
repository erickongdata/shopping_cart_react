import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import formatCurrency from '../utilities/formatCurrency';

function CartItemsList() {
  const {
    cart,
    data,
    handleAddCartItem,
    handleSubtractCartItem,
    handleRemoveCartItem,
    handleItemNumChange,
  } = useContext(AppContext);

  // Get item data from json data file
  const itemSelected = (id) => data.find((item) => item.id === id);

  return (
    <ul className="p-0" style={{ listStyle: 'none' }}>
      {cart.map((item) => (
        <li key={item.id} className="border mb-3 rounded shadow-sm">
          <div className="d-sm-flex">
            <Link to={`/product/${item.id}`}>
              <img
                className="mx-auto"
                src={itemSelected(item.id).src_s}
                alt={itemSelected(item.id).title}
                style={{
                  height: '160px',
                  width: '160px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Link>
            <div className="py-1 px-2">
              <Link
                to={`/product/${item.id}`}
                className="lead text-dark text-decoration-none"
              >
                <h5>{itemSelected(item.id).title}</h5>
              </Link>
              <p className="text-secondary">
                quantity: {item.quantity}, price:{' '}
                {formatCurrency(itemSelected(item.id).price * item.quantity)}
              </p>
              <div className="d-flex">
                <button
                  type="button"
                  onClick={() => handleSubtractCartItem(item.id)}
                  className="btn btn-light border border-2"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  max="99"
                  onChange={(e) =>
                    handleItemNumChange(item.id, +e.target.value)
                  }
                  className="rounded border border-2 px-2 text-center"
                />
                <button
                  type="button"
                  onClick={() => handleAddCartItem(item.id)}
                  className="btn btn-light border border-2"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveCartItem(item.id)}
                  className="btn btn-secondary border border-2"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartItemsList;
