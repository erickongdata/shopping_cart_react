import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import siteInfo from '../data/siteInfo';

function Navbar() {
  const { totalNumItems } = useContext(AppContext);
  return (
    <nav className="row bg-light fixed-top justify-content-center">
      <div className="navbar navbar-expand-sm bg-light p-3 col-9">
        <div className="container-fluid">
          <NavLink className="navbar-brand site-title" to="/">
            {siteInfo.siteTitle}
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
          </div>
        </div>
      </div>
      <div className="col-2 py-3 d-flex bg-light justify-content-end">
        <NavLink to="/cart">
          <button
            type="button"
            className="btn btn-light position-relative"
            data-testid="cart"
            tabIndex="-1"
          >
            <img
              src="./icons/cart.svg"
              alt=""
              width="26px"
              height="26px"
              className="opacity-50"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {totalNumItems > 0 && totalNumItems}
            </span>
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
