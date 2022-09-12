import { useContext } from 'react';
import { AppContext } from '../AppContext';
import formatCurrency from '../utilities/formatCurrency';

function CartTotalDisplay() {
  const { totalPrice, totalNumItems } = useContext(AppContext);

  return (
    <div className="row justify-content-between bg-light border fixed-bottom px-5 py-3">
      <h3 className="col-12 col-md-5">Cart {`(${totalNumItems} items)`}</h3>
      <h3 className="text-muted col-6 col-md-5 text-end">
        Total: {formatCurrency(totalPrice)}
      </h3>
      <div className="col-6 col-md-2 d-flex justify-content-end">
        <button type="button" className="btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartTotalDisplay;
