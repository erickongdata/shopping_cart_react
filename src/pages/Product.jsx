import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import formatCurrency from '../utilities/formatCurrency';
import range from '../utilities/arrayFunctions';
import ProductImageModal from '../components/ProductImageModal';

function Product() {
  const { data, cart, handleSubmitQuantity, quantityDropdown } =
    useContext(AppContext);
  const { productId = '1' } = useParams();
  const itemSelected = data.find((item) => item.id === productId);
  const index = cart.findIndex((item) => item.id === productId);
  const numInCart = index >= 0 ? cart[index].quantity : 0;
  const numArr = range(1, 10);

  return (
    <div className="container-xxl min-vh-100 bg-img">
      <div className="row mt-3 pt-5 pb-5 bg-light border rounded">
        <div className="col-12 col-sm-5 mb-5 px-4">
          <img
            src={process.env.PUBLIC_URL + itemSelected.src}
            alt={itemSelected.title}
            style={{ maxHeight: '450px', cursor: 'pointer' }}
            className="d-block mx-auto img-fluid hover-enlarge"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          />
        </div>
        <div className="col-12 col-sm-7">
          <h1 className="mb-4">{itemSelected.title}</h1>
          <h2 className="mb-2">{formatCurrency(itemSelected.price)}</h2>
          <p className="lead mb-4">Product code: {itemSelected.id}</p>
          <p className="mb-4" style={{ maxWidth: '60ch' }}>
            {itemSelected.description}
          </p>
          <div style={{ height: '5rem' }}>
            <form onSubmit={(e) => handleSubmitQuantity(e, productId)}>
              <div className="d-flex">
                <select
                  data-id={`quant-${productId}`}
                  className="me-1 rounded"
                  ref={quantityDropdown}
                >
                  {numArr.map((el) => (
                    <option
                      value={el}
                      key={el}
                      style={{ fontSize: '1.25rem' }}
                      className="text-center"
                    >
                      {el}
                    </option>
                  ))}
                </select>
                <button type="submit" className="btn btn-secondary">
                  Add to Cart
                </button>
              </div>
            </form>
            <p className="text-danger m-2">
              {numInCart > 0 && `Quantity ${numInCart} in Cart`}
            </p>
          </div>
          <div className="mt-3">
            <Link to="/shop">
              <button type="button" className="btn btn-secondary me-1">
                Continue Shopping
              </button>
            </Link>
            <Link to="/cart">
              <button type="button" className="btn btn-primary">
                Go to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ProductImageModal productId={productId} />
    </div>
  );
}

export default Product;
