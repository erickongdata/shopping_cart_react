import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import formatCurrency from '../utilities/formatCurrency';
import { filterData } from '../utilities/categoryFilter';

function ShopItemGallery() {
  const { data, category, sorting, searchTerm } = useContext(AppContext);

  const itemsShown = filterData(
    data,
    category,
    sorting.alpha,
    sorting.price,
    searchTerm
  ).map((item) => (
    <li key={item.id} className="col-12 col-md-6 col-lg-4 col-xlg-3">
      <Link
        to={`/product/${item.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card hover-enlarge" style={{ height: '280px' }}>
          <img
            src={item.src_s}
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
            <h6 className="card-title pe-4" data-testid="card-title">
              {item.title}
            </h6>
            <p>{formatCurrency(item.price)}</p>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <p>{`(${itemsShown.length} items)`}</p>
      <ul className="row gy-4 gx-4 p-0" style={{ listStyle: 'none' }}>
        {itemsShown.length > 0 ? itemsShown : <h3>No results found</h3>}
      </ul>
    </>
  );
}

export default ShopItemGallery;
