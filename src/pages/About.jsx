import { useContext } from 'react';
import { AppContext } from '../AppContext';

function About() {
  const { data } = useContext(AppContext);
  const itemSelected = data.find((item) => item.id === 'YE1');
  return (
    <div className="container">
      <div className="pt-3 pb-7">
        <h1 className="display-3">Hi!</h1>
        <h3 className="font-handlee">We are All Things Colour...</h3>
      </div>
      <img
        src={process.env.PUBLIC_URL + itemSelected.src_s}
        alt=""
        className="d-block img-fluid hover-outline"
      />
    </div>
  );
}

export default About;
