import { useContext } from 'react';
import { AppContext } from '../AppContext';
import ShopSortingButtons from '../components/ShopSortingButtons';
import ShopItemGallery from '../components/ShopItemGallery';

function Shop() {
  const { category } = useContext(AppContext);

  return (
    <div className="container">
      <div className="pt-3 pb-7">
        <div className="mb-3">
          <ShopSortingButtons />
        </div>
        <h1 className="text-capitalize">{category}</h1>
        <ShopItemGallery />
      </div>
    </div>
  );
}

export default Shop;
