import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/shop" className="btn btn-primary">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
