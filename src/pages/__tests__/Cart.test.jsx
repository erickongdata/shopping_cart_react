import { render, screen } from '@testing-library/react';
import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cart from '../Cart';
import { AppContext } from '../../AppContext';

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

const data = [
  {
    id: '1',
    title: 'Beauty and the Beast',
    author: 'Jeanne-Marie Leprince de Beaumont',
    price: 12.99,
    description: 'description1',
  },
  {
    id: '2',
    title: 'Cinderella',
    author: 'Charles Perrault',
    price: 10.99,
    description: 'description2',
  },
  {
    id: '3',
    title: 'The Ugly Duckling',
    author: 'Hans Christian Andersen',
    price: 9.99,
    description: 'description3',
  },
];

function CartContext({ cart, totalPrice }) {
  const context = useMemo(
    () => ({
      cart,
      data,
      handleAddCartItem: jest.fn,
      handleSubtractCartItem: jest.fn,
      handleRemoveCartItem: jest.fn,
      handleItemNumChange: jest.fn,
      totalPrice,
    }),
    []
  );
  return (
    <AppContext.Provider value={context}>
      <Cart />
    </AppContext.Provider>
  );
}

CartContext.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

describe('rendering data', () => {
  it('renders no items message with empty cart', () => {
    renderWithRouter(<CartContext cart={[]} totalPrice={0} />);
    expect(screen.getByText(/no items to display/i)).toBeInTheDocument();
  });

  it('renders one cart item correctly', () => {
    renderWithRouter(
      <CartContext cart={[{ id: '2', quantity: 4 }]} totalPrice={0} />
    );
    expect(screen.getByText(/Cinderella/i)).toBeInTheDocument();
    expect(screen.getByText(/quantity: 4/i)).toBeInTheDocument();
    expect(screen.getByText(/price: \$43\.96/i)).toBeInTheDocument();
  });

  it('renders total price', () => {
    renderWithRouter(<CartContext cart={[]} totalPrice={12345} />);
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
  });

  it('renders three different cart items correctly', () => {
    renderWithRouter(
      <CartContext
        cart={[
          { id: '1', quantity: 1 },
          { id: '2', quantity: 2 },
          { id: '3', quantity: 3 },
        ]}
        totalPrice={0}
      />
    );
    expect(screen.getByText(/Beauty and the Beast/i)).toBeInTheDocument();
    expect(screen.getByText(/Cinderella/i)).toBeInTheDocument();
    expect(screen.getByText(/The Ugly Duckling/i)).toBeInTheDocument();
  });
});
