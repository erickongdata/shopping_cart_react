import { useContext } from 'react';
import { useParams } from 'react-router-dom';
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
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-12 col-sm-4 my-3">
          <img
            src={process.env.PUBLIC_URL + itemSelected.src_s}
            alt={itemSelected.title}
            style={{ maxHeight: '450px', cursor: 'pointer' }}
            className="d-block mx-auto img-fluid hover-enlarge"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          />
        </div>
        <div className="col-12 col-sm-8">
          <h1>{itemSelected.title}</h1>
          <h2>{formatCurrency(itemSelected.price)}</h2>
          <p className="lead">Product code: {itemSelected.id}</p>
          <p style={{ maxWidth: '75ch' }}>{itemSelected.description}</p>
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
              {numInCart > 0 && `${numInCart} in Cart`}
            </p>
          </div>
        </div>
      </div>
      <ProductImageModal productId={productId} />
    </div>
  );
}

export default Product;
