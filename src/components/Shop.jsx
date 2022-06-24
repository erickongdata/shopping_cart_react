import { Link } from 'react-router-dom';

function Shop({ data }) {
  return (
    <div className="shop">
      <div className="container">
        <h1>Shop</h1>
        <div className="row h-100">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <Link
                to={`/product/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100">
                  <p className="lead">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
