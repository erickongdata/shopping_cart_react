import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { getCategories } from '../utilities/categoryFilter';
import siteInfo from '../data/siteInfo';

function ShopSortingButtons() {
  const { data, setCategory, setSorting } = useContext(AppContext);
  const categories = getCategories(data);

  return (
    <>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: 'az', price: '' })}
      >
        A-Z
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: 'za', price: '' })}
      >
        Z-A
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: '', price: 'lh' })}
      >
        {siteInfo.currencySymbol} low
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: '', price: 'hl' })}
      >
        {siteInfo.currencySymbol} high
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setCategory('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          key={`cat-${cat}`}
          className="btn btn-light mx-1 my-1 text-capitalize"
          onClick={() => setCategory(cat)}
          style={{
            color: `${cat}`,
            textShadow: ' -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey',
          }}
        >
          {cat}
        </button>
      ))}
    </>
  );
}

export default ShopSortingButtons;
