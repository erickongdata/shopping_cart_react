import { useContext } from 'react';
import { AppContext } from '../AppContext';
import ShopSortingButtons from '../components/ShopSortingButtons';
import ShopItemGallery from '../components/ShopItemGallery';

function Shop() {
  const { category } = useContext(AppContext);

  return (
    <div className="shop">
      <div className="container">
        <div className="py-6">
          <div className="my-3">
            <ShopSortingButtons />
          </div>
          <h1 className="text-capitalize">{category}</h1>
          <ShopItemGallery />
        </div>
      </div>
    </div>
  );
}

export default Shop;
