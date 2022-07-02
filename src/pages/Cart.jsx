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
    totalNumItems,
  } = useContext(AppContext);
  // Get item data from json data file
  const itemSelected = (id) => data.find((item) => item.id === id);

  return (
    <div className="cart">
      <div className="container">
        <div className="pt-4 pb-6">
          {cart.length === 0 ? (
            <p>No items to display</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="border mb-3 rounded">
                <div className="d-sm-flex">
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="me-3"
                      src={itemSelected(item.id).src}
                      alt={itemSelected(item.id).title}
                      style={{
                        height: '160px',
                        width: '160px',
                        objectFit: 'cover',
                      }}
                    />
                  </Link>
                  <div className="p-1">
                    <Link to={`/product/${item.id}`} className="lead text-dark">
                      <h5>{itemSelected(item.id).title}</h5>
                    </Link>
                    <p className="text-secondary">
                      quantity: {item.quantity}, price:{' '}
                      {toGBP(itemSelected(item.id).price * item.quantity)}
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
                        className="btn btn-light border border-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="row justify-content-between bg-light border fixed-bottom px-5 py-3">
          <h3 className="col-12 col-md-5">
            Basket {`(${totalNumItems} items)`}
          </h3>
          <h3 className="text-muted col-6 col-md-5 text-end">
            Total: {toGBP(totalPrice)}
          </h3>
          <div className="col-6 col-md-2 d-flex justify-content-end">
            <button type="button" className="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
