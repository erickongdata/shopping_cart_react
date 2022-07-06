import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import siteInfo from '../data/siteInfo';

function HomeCategorySelect() {
  const { setCategory } = useContext(AppContext);

  const cardImgStyle = {
    objectFit: 'cover',
    width: '320px',
    height: '240px',
    zIndex: '1',
  };

  return (
    <ul
      className="d-flex flex-wrap justify-content-center"
      style={{ listStyle: 'none' }}
    >
      {siteInfo.homeColors.map((cat) => (
        <li key={`cat-card-${cat.color}`}>
          <Link to="/Shop" onClick={() => setCategory(`${cat.color}`)}>
            <div className="category-card my-1 mx-1 bg-white position-relative d-flex justify-content-center align-items-center">
              <h2 className="category-card-title position-absolute text-black">
                {cat.color}
              </h2>
              <img
                className="category-card-image"
                src={cat.image}
                alt=""
                style={cardImgStyle}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomeCategorySelect;
