import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import siteInfo from '../data/siteInfo';

function Navbar() {
  const { totalNumItems, handleSearchItem, searchBar } = useContext(AppContext);
  return (
    <nav className="border-bottom sticky-top">
      <div className="row bg-white justify-content-center container-xxl mx-auto">
        <div className="navbar navbar-expand-md bg-white p-3 col-9 col-md-10">
          <NavLink className="navbar-brand font-handlee fs-4" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/icons/color.svg`}
              alt=""
              width="26px"
              height="26px"
              className="me-2"
            />
            <span className="site-title">{siteInfo.siteTitle}</span>
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
                  SHOP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>
            </ul>
            <form
              className="d-flex mx-auto my-2"
              role="search"
              onSubmit={handleSearchItem}
            >
              <input
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={searchBar}
              />
              <button className="btn btn-danger" type="submit">
                <i className="bi bi-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="col-3 col-md-2 py-3 d-flex bg-white justify-content-end">
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
      </div>
    </nav>
  );
}

export default Navbar;
