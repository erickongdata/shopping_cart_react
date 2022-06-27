import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shop from '../Shop';

function MockShop({ data }) {
  return (
    <BrowserRouter>
      <Shop data={data} />
    </BrowserRouter>
  );
}

MockShop.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

describe('rendering data', () => {
  it('renders correctly with one item', () => {
    const data = [{ id: '1', title: 'Alice in Wonderland', price: 9.99 }];
    render(<MockShop data={data} />);
    expect(screen.getByText(/alice in wonderland/i)).toBeInTheDocument();
    expect(screen.getByText(/9.99/i)).toBeInTheDocument();
  });

  it('renders correctly with three items', () => {
    const data = [
      { id: '1', title: 'Alice in Wonderland', price: 9.99 },
      { id: '2', title: 'Alice in Wonderland', price: 9.99 },
      { id: '3', title: 'Alice in Wonderland', price: 9.99 },
    ];
    render(<MockShop data={data} />);
    const elements = screen.getAllByText(/alice in wonderland/i);
    expect(elements.length).toBe(3);
  });
});
