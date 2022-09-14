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
