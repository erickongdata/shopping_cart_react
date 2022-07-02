import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

function Home() {
  const { siteTitle } = useContext(AppContext);
  return (
    <div className="home">
      <div className="container">
        <div className="py-6">
          <h1>{siteTitle}</h1>
          <Link to="/shop" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
