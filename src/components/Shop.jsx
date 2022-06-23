function Shop({ books, handleAddCartItem }) {
  return (
    <div className="shop">
      <h1>Shop</h1>
      {books.map((book) => (
        <div key={book.id} className="mb-5">
          <p>
            {book.title} ${book.price}
          </p>
          <button type="button" onClick={() => handleAddCartItem(book.id)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
