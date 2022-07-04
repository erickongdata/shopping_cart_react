import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import siteInfo from '../data/siteInfo';

function Home() {
  const { setCategory } = useContext(AppContext);
  const imgStyle = {
    objectFit: 'cover',
    height: '480px',
  };
  const cardImgStyle = {
    objectFit: 'cover',
    width: '320px',
    height: '240px',
    zIndex: '1',
  };
  return (
    <div className="home">
      <div className="container">
        <div className="py-7">
          <div className="home-banner">
            <div
              id="carouselHomePage"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselHomePage"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselHomePage"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselHomePage"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                />
                <button
                  type="button"
                  data-bs-target="#carouselHomePage"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                />
                <button
                  type="button"
                  data-bs-target="#carouselHomePage"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={siteInfo.homeBanner[0].images}
                    className="d-block w-100"
                    alt=""
                    style={imgStyle}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{siteInfo.homeBanner[0].title}</h5>
                    <p>{siteInfo.homeBanner[0].desc}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={siteInfo.homeBanner[1].images}
                    className="d-block w-100"
                    alt=""
                    style={imgStyle}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{siteInfo.homeBanner[1].title}</h5>
                    <p>{siteInfo.homeBanner[1].desc}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={siteInfo.homeBanner[2].images}
                    className="d-block w-100"
                    alt=""
                    style={imgStyle}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{siteInfo.homeBanner[2].title}</h5>
                    <p>{siteInfo.homeBanner[2].desc}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={siteInfo.homeBanner[3].images}
                    className="d-block w-100"
                    alt=""
                    style={imgStyle}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{siteInfo.homeBanner[3].title}</h5>
                    <p>{siteInfo.homeBanner[3].desc}</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={siteInfo.homeBanner[4].images}
                    className="d-block w-100"
                    alt=""
                    style={imgStyle}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{siteInfo.homeBanner[4].title}</h5>
                    <p>{siteInfo.homeBanner[4].desc}</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselHomePage"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselHomePage"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-5">
            <Link to="/shop">
              <button type="button" className="btn btn-danger my-1">
                GO TO SHOP
              </button>
            </Link>
          </div>
          <h3>Choose a Colour</h3>
          <div className="home-category-select">
            <div className="d-flex flex-wrap justify-content-center">
              {siteInfo.homeColors.map((cat) => (
                <Link
                  to="/Shop"
                  key={`cat-card-${cat.color}`}
                  onClick={() => setCategory(`${cat.color}`)}
                >
                  <div className="category-card my-1 mx-1 position-relative d-flex justify-content-center align-items-center">
                    <div className="category-card-title position-absolute bg-white w-100 h-100 d-flex justify-content-center align-items-center">
                      <h2 className="text-black">{cat.color}</h2>
                    </div>
                    <img
                      className="category-card-image"
                      src={cat.image}
                      alt={cat.color}
                      style={cardImgStyle}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
