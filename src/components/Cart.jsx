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
          <div key={item.id}>
            <p>
              {bookTitle(item.id)}, id: {item.id}
            </p>
            <p>
              quantity: {item.quantity}, price: $
              {bookPrice(item.id) * item.quantity}
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
