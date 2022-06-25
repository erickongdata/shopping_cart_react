import { Link } from 'react-router-dom';

function Shop({ data }) {
  return (
    <div className="shop">
      <div className="container">
        <h1>Shop</h1>
        <div className="row gy-4 gx-4">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <Link
                to={`/product/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card" style={{ height: '200px' }}>
                  <p className="card-title">{item.title}</p>
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
