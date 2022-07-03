import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../AppContext';
import Shop from '../Shop';

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

function ShopContext({ data }) {
  const context = useMemo(
    () => ({
      data,
      category: 'all',
      sorting: 'az',
      setCategory: jest.fn,
      setSorting: jest.fn,
    }),
    []
  );
  return (
    <AppContext.Provider value={context}>
      <Shop />
    </AppContext.Provider>
  );
}

ShopContext.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

describe('rendering data', () => {
  it('renders correctly with one item', () => {
    const data = [
      { id: '1', title: 'Alice in Wonderland', price: 19.99, category: 1 },
    ];
    renderWithRouter(<ShopContext data={data} />);
    expect(screen.getByText(/alice in wonderland/i)).toBeInTheDocument();
    expect(screen.getByText(/19.99/i)).toBeInTheDocument();
  });

  it('renders correctly with three items', () => {
    const data = [
      { id: '1', title: 'Alice in Wonderland', price: 9.99, category: 1 },
      { id: '2', title: 'Alice in Wonderland', price: 9.99, category: 1 },
      { id: '3', title: 'Alice in Wonderland', price: 9.99, category: 1 },
    ];
    renderWithRouter(<ShopContext data={data} />);
    const elements = screen.getAllByText(/alice in wonderland/i);
    expect(elements.length).toBe(3);
  });
});
