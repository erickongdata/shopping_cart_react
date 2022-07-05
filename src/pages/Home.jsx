import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import HomeCategorySelect from '../components/HomeCategorySelect';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="py-7">
          <HomeBanner />
          <div className="d-flex justify-content-center mb-5">
            <Link to="/shop" className="btn btn-danger my-1">
              GO TO SHOP
            </Link>
          </div>
          <h3>Choose a Colour</h3>
          <HomeCategorySelect />
        </div>
      </div>
    </div>
  );
}

export default Home;
