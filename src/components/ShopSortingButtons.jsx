import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { getCategories } from '../utilities/categoryFilter';

function ShopSortingButtons() {
  const { data, setCategory, setSorting, sorting } = useContext(AppContext);
  const categories = getCategories(data);

  return (
    <div className="d-flex flex-wrap">
      <button
        type="button"
        className="fw-bold btn btn-light m-1 border-secondary border-opacity-25 hover-enlarge"
        onClick={() => setCategory('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          key={`cat-${cat}`}
          className="btn btn-light m-1 text-capitalize border-secondary border-opacity-25 hover-enlarge"
          onClick={() => setCategory(cat)}
          style={{
            color: `${cat}`,
            textShadow: ' -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          }}
        >
          {cat}
        </button>
      ))}
      <select
        className="form-select d-inline bg-light m-1 ms-auto hover-enlarge"
        style={{ width: 'max-content' }}
        aria-label="Sort by"
        onChange={(e) => setSorting(e.target.value)}
        defaultValue={sorting}
      >
        <option value="az">Sort: A-Z</option>
        <option value="za">Sort: Z-A</option>
        <option value="price-lh">Sort: Price low-high</option>
        <option value="price-hl">Sort: Price high-low</option>
      </select>
    </div>
  );
}

export default ShopSortingButtons;
