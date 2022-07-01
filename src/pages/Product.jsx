import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import toGBP from '../utilities/formatCurrency';

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

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
        <h1>{itemSelected.title}</h1>
        <h2>{toGBP(itemSelected.price)}</h2>
        <p>{itemSelected.description}</p>
        <div style={{ height: '5rem' }}>
          <form onSubmit={(e) => handleSubmitQuantity(e, productId)}>
            <div className="d-flex">
              <select data-id={`quant-${productId}`} className="me-1 rounded">
                {numArr.map((el) => (
                  <option value={el} key={el} style={{ fontSize: '1.25rem' }}>
                    {el}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn btn-secondary">
                Add to Basket
              </button>
            </div>
          </form>
          <p className="text-success">
            {numInCart > 0 && `${numInCart} in Cart`}
          </p>
        </div>
        <img
          src={itemSelected.src}
          alt={itemSelected.title}
          style={{ maxHeight: '400px', width: 'auto', maxWidth: '100%' }}
        />
      </div>
    </div>
  );
}

export default Product;
