import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">
        <button type="button" className="btn btn-primary">
          Back to Home
        </button>
      </Link>
    </>
  );
}

export default NotFound;
