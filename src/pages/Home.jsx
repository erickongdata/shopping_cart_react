import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Home({ siteTitle }) {
  return (
    <div className="home">
      <div className="container">
        <h1>{siteTitle}</h1>
        <Link to="/shop" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

Home.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Home;
