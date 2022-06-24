import { Link } from 'react-router-dom';

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

export default Home;
