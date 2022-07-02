import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import toGBP from '../utilities/formatCurrency';
import { getCategories, filterData } from '../utilities/categoryFilter';

function Shop() {
  const { data, category, setCategory, sorting, setSorting } =
    useContext(AppContext);

  const categories = getCategories(data);

  return (
    <div className="shop">
      <div className="container">
        <div className="pb-5">
          <div className="my-3">
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => setCategory('all')}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => setSorting({ alpha: 'az', price: '' })}
            >
              A-Z
            </button>
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => setSorting({ alpha: 'za', price: '' })}
            >
              Z-A
            </button>
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => setSorting({ alpha: '', price: 'lh' })}
            >
              £ low
            </button>
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => setSorting({ alpha: '', price: 'hl' })}
            >
              £ high
            </button>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className="btn btn-light mx-1 text-capitalize"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <h1 className="text-capitalize">{category}</h1>
          <div className="row gy-4 gx-4">
            {filterData(data, category, sorting.alpha, sorting.price).map(
              (item) => (
                <div
                  key={item.id}
                  className="col-12 col-md-6 col-lg-4 col-xlg-3"
                >
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
