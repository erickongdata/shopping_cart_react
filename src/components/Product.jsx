import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function Product({ data, cart, handleSubmitQuantity }) {
  const { idNum = '1' } = useParams();
  const itemSelected = data.find((item) => item.id === idNum);
  const index = cart.findIndex((item) => item.id === idNum);
  const numInCart = index >= 0 ? cart[index].quantity : 0;
  const numArr = range(1, 20);
  return (
    <div className="product">
      <div className="container">
        <h1>{itemSelected.title}</h1>
        <h2>${itemSelected.price}</h2>
        <h2>{itemSelected.author}</h2>
        <p>{itemSelected.description}</p>
        <form onSubmit={(e) => handleSubmitQuantity(e, idNum)}>
          <select data-id={`quant-${idNum}`}>
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

Product.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleSubmitQuantity: PropTypes.func.isRequired,
};

export default Product;
