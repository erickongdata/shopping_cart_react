import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import toGBP from '../utilities/formatCurrency';

function Shop() {
  const { data } = useContext(AppContext);
  return (
    <div className="shop">
      <div className="container">
        <h1>Shop</h1>
        <div className="row gy-4 gx-4">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xlg-3">
              <Link
                to={`/product/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card" style={{ height: '280px' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      objectFit: 'cover',
                      height: '200px',
                    }}
                  />
                  <div
                    className="d-flex justify-content-between gx-5 p-1"
                    style={{ height: '80px' }}
                  >
                    <h6 className="card-title pe-4">{item.title}</h6>
                    <p>{toGBP(item.price)}</p>
                  </div>
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
