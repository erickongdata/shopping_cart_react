import { Link } from 'react-router-dom';

function Shop({ data }) {
  return (
    <div className="shop">
      <h1>Shop</h1>
      {data.map((item) => (
        <div key={item.id} className="mb-5">
          <Link to={`/product/${item.id}`}>
            <p>
              {item.title} ${item.price}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
