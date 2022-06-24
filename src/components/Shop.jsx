import { Link } from 'react-router-dom';

function Shop({ books }) {
  return (
    <div className="shop">
      <h1>Shop</h1>
      {books.map((book) => (
        <div key={book.id} className="mb-5">
          <Link to={`/product/${book.id}`}>
            <p>
              {book.title} ${book.price}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
