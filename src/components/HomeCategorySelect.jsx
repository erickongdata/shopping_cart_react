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
      className="d-flex flex-wrap justify-content-center p-0"
      style={{ listStyle: 'none' }}
    >
      {siteInfo.homeColors.map((cat) => (
        <li key={`cat-card-${cat.color}`}>
          <Link to="/shop" onClick={() => setCategory(`${cat.color}`)}>
            <div
              className="hover-outline my-3 mx-3 bg-white position-relative d-flex justify-content-center align-items-center"
              role="button"
            >
              <h2 className="position-absolute text-black">{cat.color}</h2>
              <img
                className="hover-fade"
                src={process.env.PUBLIC_URL + cat.image}
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
