import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';

function Navbar() {
  const { siteTitle, totalNumItems } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-sm bg-light p-3 sticky-top">
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
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="ms-auto">
            <NavLink className="nav-link" to="/cart">
              <button
                type="button"
                className="btn btn-outline-secondary position-relative px-3"
              >
                <img
                  src="./icons/cart.svg"
                  alt=""
                  width="26px"
                  height="26px"
                  className="me-2 opacity-50"
                />
                <span>Basket</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalNumItems > 0 && totalNumItems}
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
