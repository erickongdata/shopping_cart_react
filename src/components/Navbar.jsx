import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ siteTitle, totalNumItems }) {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {siteTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart {totalNumItems > 0 && totalNumItems}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  totalNumItems: PropTypes.number.isRequired,
};

export default Navbar;
