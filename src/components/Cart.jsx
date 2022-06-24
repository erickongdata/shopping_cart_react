import { Link } from 'react-router-dom';

function Cart({
  cart,
  books,
  handleAddCartItem,
  handleSubtractCartItem,
  handleRemoveCartItem,
  totalPrice,
}) {
  const bookTitle = (id) => books.find((book) => book.id === id).title;
  const bookPrice = (id) => books.find((book) => book.id === id).price;

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items to display</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="mb-5">
            <Link to={`/product/${item.id}`} className="lead text-dark">
              <h3>
                {bookTitle(item.id)}, id: {item.id}
              </h3>
            </Link>
            <p className="text-secondary">
              quantity: {item.quantity}, price: $
              {(bookPrice(item.id) * item.quantity).toFixed(2)}
            </p>
            <button type="button" onClick={() => handleAddCartItem(item.id)}>
              +
            </button>
            <button
              type="button"
              onClick={() => handleSubtractCartItem(item.id)}
            >
              -
            </button>
            <button type="button" onClick={() => handleRemoveCartItem(item.id)}>
              x
            </button>
          </div>
        ))
      )}
      <h2>Total: ${totalPrice}</h2>
    </div>
  );
}

export default Cart;
