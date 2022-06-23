function Cart({ cart, books }) {
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
          <p key={item.id}>
            {bookTitle(item.id)}, id: {item.id}, quantity: {item.quantity}
          </p>
        ))
      )}
    </div>
  );
}

export default Cart;
