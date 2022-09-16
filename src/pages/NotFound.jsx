import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container bg-img min-vh-80">
      <div className="pt-3 pb-7 d-flex flex-column align-items-center">
        <h1 className="text-center mb-3">Page not found</h1>
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
