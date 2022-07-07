import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <div className="pt-3 pb-7">
        <h1>Page not found</h1>
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
