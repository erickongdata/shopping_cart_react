import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import toGBP from '../utilities/formatCurrency';
import range from '../utilities/arrayFunctions';

function Product() {
  const { data, cart, handleSubmitQuantity } = useContext(AppContext);
  const { productId = '1' } = useParams();
  const itemSelected = data.find((item) => item.id === productId);
  const index = cart.findIndex((item) => item.id === productId);
  const numInCart = index >= 0 ? cart[index].quantity : 0;
  const numArr = range(1, 10);
  return (
    <div className="product">
      <div className="container">
        <div className="row py-6">
          <div className="col-12 col-md-4">
            <img
              src={itemSelected.src}
              alt={itemSelected.title}
              style={{ maxHeight: '450px', width: 'auto', maxWidth: '100%' }}
              className="d-block mx-auto pt-2 pb-3"
            />
          </div>
          <div className="col-12 col-md-8">
            <h1>{itemSelected.title}</h1>
            <h2>{toGBP(itemSelected.price)}</h2>
            <p className="lead">Product code: {itemSelected.id}</p>
            <p style={{ maxWidth: '75ch' }}>{itemSelected.description}</p>
            <div style={{ height: '5rem' }}>
              <form onSubmit={(e) => handleSubmitQuantity(e, productId)}>
                <div className="d-flex">
                  <select
                    data-id={`quant-${productId}`}
                    className="me-1 rounded"
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
              <p className="text-success">
                {numInCart > 0 && `${numInCart} in Cart`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
