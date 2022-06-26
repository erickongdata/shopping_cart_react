import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Product({ data, cart, handleAddCartItem }) {
  const { idNum } = useParams();
  const itemSelected = data.find((item) => item.id === idNum);
  const index = cart.findIndex((item) => item.id === idNum);
  const numInCart = index >= 0 ? cart[index].quantity : 0;
  return (
    <div className="product">
      <div className="container">
        <h1>{itemSelected.title}</h1>
        <h2>${itemSelected.price}</h2>
        <h2>{itemSelected.author}</h2>
        <p>{itemSelected.description}</p>
        <button type="button" onClick={() => handleAddCartItem(idNum)}>
          Add to cart
        </button>
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
  handleAddCartItem: PropTypes.func.isRequired,
};

export default Product;
