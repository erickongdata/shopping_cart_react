import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function Product() {
  const { data, cart, handleSubmitQuantity } = useContext(AppContext);
  const { productId = '1' } = useParams();
  const itemSelected = data.find((item) => item.id === productId);
  const index = cart.findIndex((item) => item.id === productId);
  const numInCart = index >= 0 ? cart[index].quantity : 0;
  const numArr = range(1, 20);
  return (
    <div className="product">
      <div className="container">
        <h1>{itemSelected.title}</h1>
        <h2>${itemSelected.price}</h2>
        <p>{itemSelected.description}</p>
        <form onSubmit={(e) => handleSubmitQuantity(e, productId)}>
          <select data-id={`quant-${productId}`}>
            {numArr.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
          <button type="submit">Add to cart</button>
        </form>
        <p className="text-success">
          {numInCart > 0 && `${numInCart} in Cart`}
        </p>
      </div>
    </div>
  );
}

export default Product;
