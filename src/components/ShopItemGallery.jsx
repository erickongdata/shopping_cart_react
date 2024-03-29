import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import formatCurrency from '../utilities/formatCurrency';
import { filterData } from '../utilities/categoryFilter';

function ShopItemGallery() {
  const { data, category, sorting, searchTerm } = useContext(AppContext);

  const itemsShown = filterData(data, category, sorting, searchTerm).map(
    (item) => (
      <li key={item.id} className="col-12 col-md-6 col-lg-4 col-xlg-3">
        <Link
          to={`/product/${item.id}`}
          className="text-decoration-none text-dark"
        >
          <div
            className="card shadow-sm hover-enlarge bg-light"
            style={{ height: '280px' }}
          >
            <img
              src={process.env.PUBLIC_URL + item.src_s}
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
              <div className="card-title pe-4" data-testid="card-title">
                {item.title}
              </div>
              <div>{formatCurrency(item.price)}</div>
            </div>
          </div>
        </Link>
      </li>
    )
  );

  return (
    <>
      <h5 className="text-muted">{`${itemsShown.length} items`}</h5>
      <ul className="row gy-4 gx-4 p-0" style={{ listStyle: 'none' }}>
        {itemsShown.length > 0 ? itemsShown : <h3>No results found</h3>}
      </ul>
    </>
  );
}

export default ShopItemGallery;
