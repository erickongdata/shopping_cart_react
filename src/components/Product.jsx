import { useParams } from 'react-router-dom';

function Product({ books, cart, handleAddCartItem }) {
  const { idNum } = useParams();
  const itemSelect = books.find((book) => book.id === idNum);
  const numInCart = () => {
    const index = cart.findIndex((item) => item.id === idNum);
    if (index >= 0) return cart[index].quantity;
    return 0;
  };
  return (
    <div className="product">
      <h1>{itemSelect.title}</h1>
      <h2>${itemSelect.price}</h2>
      <h2>{itemSelect.author}</h2>
      <p>{itemSelect.description}</p>
      <button type="button" onClick={() => handleAddCartItem(idNum)}>
        Add to cart
      </button>
      <p className="text-success">
        {numInCart() > 0 && `${numInCart()} in Cart`}{' '}
      </p>
    </div>
  );
}

export default Product;
