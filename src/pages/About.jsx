import { useContext } from 'react';
import { AppContext } from '../AppContext';

function About() {
  const { data } = useContext(AppContext);
  const itemSelected = data.find((item) => item.id === 'YE1');
  return (
    <div className="container bg-img">
      <div className="pt-3 row vh-100">
        <div className="pb-5 col-12 col-lg-8">
          <h1 className="display-3">Hello!</h1>
          <h3 className="font-handlee">Thank you for shopping with us!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nisi iure hic, quia repellendus adipisci facilis labore nobis
            deserunt sapiente cumque molestias, reprehenderit modi quam saepe?
            Rem, laborum perferendis. Temporibus, doloribus repellendus deleniti
            nesciunt architecto asperiores perspiciatis et quis, porro maxime
            praesentium veritatis nostrum minima obcaecati ex similique magnam
            mollitia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            eveniet ducimus nihil vero pariatur dolore quia corporis? Minima
            sunt impedit voluptatum non esse repellat nostrum accusamus. Nulla
            similique, quibusdam nemo voluptatum nesciunt dicta ea voluptate
            iusto tempora unde! Suscipit, velit?
          </p>
          <h3 className="font-handlee">Love from</h3>
          <h3 className="font-handlee">All Things Colour.</h3>
        </div>
        <div className="col-12 col-lg-4">
          <img
            src={process.env.PUBLIC_URL + itemSelected.src_s}
            alt=""
            className="d-block img-fluid m-3"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
