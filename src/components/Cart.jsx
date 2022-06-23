function Cart({ cart, books, handleAddCartItem }) {
  const bookTitle = (id) => {
    const bookSelect = books.find((book) => book.id === id);
    return bookSelect.title;
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items to display</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {bookTitle(item.id)}, id: {item.id}, quantity: {item.quantity}
            </p>
            <button type="button" onClick={() => handleAddCartItem(item.id)}>
              +
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
