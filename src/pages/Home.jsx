import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import HomeCategorySelect from '../components/HomeCategorySelect';

function Home() {
  return (
    <div className="container">
      <div className="pt-3 pb-7">
        <h3 className="text-center bg-danger bg-gradient text-light">
          SPECIAL SALE ON NOW!
        </h3>
        <HomeBanner />
        <div className="d-flex justify-content-center mb-5">
          <Link to="/shop" className="btn btn-danger bg-gradient my-1">
            BROWSE THE STORE
          </Link>
        </div>
        <h3 className="text-center text-light bg-secondary bg-gradient">
          CHOOSE A COLOUR
        </h3>
        <HomeCategorySelect />
      </div>
    </div>
  );
}

export default Home;
