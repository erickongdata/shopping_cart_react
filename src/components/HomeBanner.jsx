import siteInfo from '../data/siteInfo';

function HomeBanner() {
  const imgStyle = {
    objectFit: 'cover',
    height: '480px',
  };
  return (
    <div
      id="carouselHomePage"
      className="carousel slide"
      data-bs-ride="carousel"
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
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src={process.env.PUBLIC_URL + siteInfo.homeBanner[0].images}
            className="d-block w-100"
            alt=""
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{siteInfo.homeBanner[0].title}</h5>
            <p>{siteInfo.homeBanner[0].desc}</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={process.env.PUBLIC_URL + siteInfo.homeBanner[1].images}
            className="d-block w-100"
            alt=""
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{siteInfo.homeBanner[1].title}</h5>
            <p>{siteInfo.homeBanner[1].desc}</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={process.env.PUBLIC_URL + siteInfo.homeBanner[2].images}
            className="d-block w-100"
            alt=""
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{siteInfo.homeBanner[2].title}</h5>
            <p>{siteInfo.homeBanner[2].desc}</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={process.env.PUBLIC_URL + siteInfo.homeBanner[3].images}
            className="d-block w-100"
            alt=""
            style={imgStyle}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>{siteInfo.homeBanner[3].title}</h5>
            <p>{siteInfo.homeBanner[3].desc}</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={process.env.PUBLIC_URL + siteInfo.homeBanner[4].images}
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
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHomePage"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeBanner;
