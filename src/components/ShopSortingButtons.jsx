import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { getCategories } from '../utilities/categoryFilter';

function ShopSortingButtons() {
  const { data, setCategory, setSorting } = useContext(AppContext);

  const categories = getCategories(data);
  const btnStyle = { boxShadow: `0px 1px 3px grey ` };
  return (
    <>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setCategory('all')}
        style={btnStyle}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: 'az', price: '' })}
        style={btnStyle}
      >
        A-Z
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: 'za', price: '' })}
        style={btnStyle}
      >
        Z-A
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: '', price: 'lh' })}
        style={btnStyle}
      >
        £ low
      </button>
      <button
        type="button"
        className="btn btn-light mx-1 my-1"
        onClick={() => setSorting({ alpha: '', price: 'hl' })}
        style={btnStyle}
      >
        £ high
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          key={`cat-${cat}`}
          className="btn btn-light mx-1 my-1 text-capitalize"
          onClick={() => setCategory(cat)}
          style={{ ...btnStyle, boxShadow: `0px 1px 3px ${cat} ` }}
        >
          {cat}
        </button>
      ))}
    </>
  );
}

export default ShopSortingButtons;
