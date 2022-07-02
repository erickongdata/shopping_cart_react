/* eslint react/jsx-no-useless-fragment: 0 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function ScrollToTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop;
