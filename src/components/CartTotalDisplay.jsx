import { useContext } from 'react';
import { AppContext } from '../AppContext';
import formatCurrency from '../utilities/formatCurrency';

function CartTotalDisplay() {
  const { cart, data, totalPrice, totalNumItems } = useContext(AppContext);

  // Get item data from json data file
  const itemSelected = (id) => data.find((item) => item.id === id);

  return (
    <>
      <div className="bg-light border fixed-bottom px-1 py-3">
        <div className="row container-xxl mx-auto">
          <h5 className="col-12 col-md-5 text-start">
            Cart {`(${totalNumItems} items)`}
          </h5>
          <h5 className="text-muted col-8 col-md-5">
            Subtotal: {formatCurrency(totalPrice)}
          </h5>
          <div className="col-4 col-md-2 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#checkoutModal"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="checkoutModal"
        tabIndex="-1"
        aria-labelledby="checkoutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="checkoutModalLabel">
                <i className="bi bi-truck me-2" />
                CHECKOUT
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {cart.length > 0 ? (
                <p className="fw-bold">
                  Done! The following items will be delivered.
                </p>
              ) : (
                <p>No items</p>
              )}
              <div className="border-bottom">
                {cart.map((item) => (
                  <li key={item.id} style={{ listStyle: 'none' }}>
                    <div className="row mb-2">
                      <div className="col-8">{`${
                        itemSelected(item.id).title
                      } (x${item.quantity})`}</div>
                      <div className="col-4 text-end">
                        {formatCurrency(
                          itemSelected(item.id).price * item.quantity
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div className="d-flex justify-content-between">
                <p>Subtotal:</p>
                <p>{formatCurrency(totalPrice)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Delivery:</p>
                <p>{formatCurrency(totalPrice * 0.03)}</p>
              </div>
              <div className="d-flex justify-content-between border-top border-2 fw-bold">
                <p>Total:</p>
                <p>{formatCurrency(totalPrice * 1.03)}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotalDisplay;
