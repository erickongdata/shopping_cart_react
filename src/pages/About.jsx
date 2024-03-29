import { useContext } from 'react';
import { AppContext } from '../AppContext';

function About() {
  const { data } = useContext(AppContext);
  const itemSelected = data.find((item) => item.id === 'YE1');
  return (
    <div className="container-xxl bg-img">
      <div className="pt-3 row min-vh-100">
        <div className="col-12 col-lg-7 px-3">
          <div className="mx-auto" style={{ maxWidth: 'max-content' }}>
            <h1 className="display-3">Hello!</h1>
            <h3 className="font-handlee">Thank you for shopping with us!</h3>
            <p style={{ maxWidth: '60ch' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi iure hic, quia repellendus adipisci facilis labore nobis
              deserunt sapiente cumque molestias, reprehenderit modi quam saepe?
              Rem, laborum perferendis. Temporibus, doloribus repellendus
              deleniti nesciunt architecto asperiores perspiciatis et quis,
              porro maxime praesentium veritatis nostrum minima obcaecati ex
              similique magnam mollitia?
            </p>
            <p style={{ maxWidth: '60ch' }}>
              Ullam eveniet ducimus nihil vero pariatur dolore quia corporis?
              Minima sunt impedit voluptatum non esse repellat nostrum
              accusamus. Nulla similique, quibusdam nemo voluptatum nesciunt
              dicta ea voluptate iusto tempora unde! Suscipit, velit?
            </p>
            <h3 className="font-handlee">Love from</h3>
            <h3 className="font-handlee">All Things Colour.</h3>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <img
            src={process.env.PUBLIC_URL + itemSelected.src}
            alt=""
            className="d-block mt-3 img-fluid w-100 mx-auto"
            style={{ maxWidth: '450px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
