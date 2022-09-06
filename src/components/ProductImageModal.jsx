import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../AppContext';

function ProductImageModal({ productId }) {
  const { data } = useContext(AppContext);
  const itemSelected = data.find((item) => item.id === productId);

  return (
    <div
      className="modal fade"
      id="imageModal"
      tabIndex="-1"
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body mx-auto">
            <img
              src={process.env.PUBLIC_URL + itemSelected.src}
              alt={itemSelected.title}
              className="img-fluid"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductImageModal.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductImageModal;
