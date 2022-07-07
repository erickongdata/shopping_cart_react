import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import HomeCategorySelect from '../components/HomeCategorySelect';

function Home() {
  return (
    <div className="container">
      <div className="pt-3 pb-7">
        <HomeBanner />
        <div className="d-flex justify-content-center mb-5">
          <Link to="/shop" className="btn btn-danger my-1">
            GO TO SHOP
          </Link>
        </div>
        <h3 className="text-center">Choose a Colour</h3>
        <HomeCategorySelect />
      </div>
    </div>
  );
}

export default Home;
