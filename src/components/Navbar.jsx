import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ siteTitle, totalNumItems }) {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {siteTitle}
        </NavLink>
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
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart {totalNumItems > 0 && totalNumItems}
              </NavLink>
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
