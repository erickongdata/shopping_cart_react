import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { getCategories } from '../utilities/categoryFilter';

function ShopSortingButtons() {
  const { data, setCategory, setSorting } = useContext(AppContext);
  const categories = getCategories(data);

  const handleChange = (e) => {
    const selected = e.target.value;
    switch (selected) {
      case 'az':
        setSorting({ alpha: 'az', price: '' });
        break;
      case 'za':
        setSorting({ alpha: 'za', price: '' });
        break;
      case 'price-lh':
        setSorting({ alpha: '', price: 'lh' });
        break;
      case 'price-hl':
        setSorting({ alpha: '', price: 'hl' });
        break;
      default:
        setSorting({ alpha: '', price: '' });
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-light m-1"
        onClick={() => setCategory('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          key={`cat-${cat}`}
          className="btn btn-light m-1 text-capitalize"
          onClick={() => setCategory(cat)}
          style={{
            color: `${cat}`,
            textShadow: ' -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey',
          }}
        >
          {cat}
        </button>
      ))}
      <select
        className="form-select d-inline bg-light m-1"
        style={{ width: 'max-content' }}
        aria-label="Sort by"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>
          Sort by
        </option>
        <option value="az">Sorted A-Z</option>
        <option value="za">Sorted Z-A</option>
        <option value="price-lh">Sorted by Price: low-high</option>
        <option value="price-hl">Sorted by Price: high-low</option>
      </select>
    </div>
  );
}

export default ShopSortingButtons;
