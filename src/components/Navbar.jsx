import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import siteInfo from '../data/siteInfo';

function Navbar() {
  const { totalNumItems, handleSearchItem, searchBar } = useContext(AppContext);
  return (
    <nav className="row bg-white sticky-top justify-content-center border-bottom shadow">
      <div className="navbar navbar-expand-md bg-white p-3 col-9">
        <div className="container-fluid">
          <NavLink className="navbar-brand font-handlee fs-4" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/icons/color.svg`}
              alt=""
              width="26px"
              height="26px"
              className="me-2"
            />
            <span>{siteInfo.siteTitle}</span>
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
            <form
              className="d-flex mx-auto"
              role="search"
              onSubmit={handleSearchItem}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products"
                aria-label="Search"
                ref={searchBar}
              />
              <button className="btn btn-danger" type="submit">
                <i className="bi bi-search" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-2 py-3 d-flex bg-white justify-content-end">
        <NavLink to="/cart">
          <button
            type="button"
            className="btn btn-white position-relative"
            data-testid="cart"
            tabIndex="-1"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/cart.svg`}
              alt="cart"
              width="26px"
              height="26px"
              className="opacity-50"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalNumItems > 0 && totalNumItems}
            </span>
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
