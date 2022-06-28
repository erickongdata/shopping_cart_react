import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart';

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('rendering data', () => {
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

  const handleAddCartItem = jest.fn();
  const handleSubtractCartItem = jest.fn();
  const handleRemoveCartItem = jest.fn();
  const handleItemNumChange = jest.fn();

  it('renders no items message with empty cart', () => {
    renderWithRouter(
      <Cart
        cart={[]}
        data={data}
        handleAddCartItem={handleAddCartItem}
        handleSubtractCartItem={handleSubtractCartItem}
        handleRemoveCartItem={handleRemoveCartItem}
        handleItemNumChange={handleItemNumChange}
        totalPrice={0}
      />
    );
    expect(screen.getByText(/no items to display/i)).toBeInTheDocument();
  });

  it('renders one cart item correctly', () => {
    renderWithRouter(
      <Cart
        cart={[{ id: '2', quantity: 4 }]}
        data={data}
        handleAddCartItem={handleAddCartItem}
        handleSubtractCartItem={handleSubtractCartItem}
        handleRemoveCartItem={handleRemoveCartItem}
        handleItemNumChange={handleItemNumChange}
        totalPrice={0}
      />
    );
    expect(screen.getByText(/Cinderella/i)).toBeInTheDocument();
    expect(screen.getByText(/quantity: 4/i)).toBeInTheDocument();
    expect(screen.getByText(/price: \$43\.96/i)).toBeInTheDocument();
  });

  it('renders total price', () => {
    renderWithRouter(
      <Cart
        cart={[]}
        data={data}
        handleAddCartItem={handleAddCartItem}
        handleSubtractCartItem={handleSubtractCartItem}
        handleRemoveCartItem={handleRemoveCartItem}
        handleItemNumChange={handleItemNumChange}
        totalPrice={12345}
      />
    );
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
  });

  it('renders three different cart items correctly', () => {
    renderWithRouter(
      <Cart
        cart={[
          { id: '1', quantity: 1 },
          { id: '2', quantity: 2 },
          { id: '3', quantity: 3 },
        ]}
        data={data}
        handleAddCartItem={handleAddCartItem}
        handleSubtractCartItem={handleSubtractCartItem}
        handleRemoveCartItem={handleRemoveCartItem}
        handleItemNumChange={handleItemNumChange}
        totalPrice={0}
      />
    );
    expect(screen.getByText(/Beauty and the Beast/i)).toBeInTheDocument();
    expect(screen.getByText(/Cinderella/i)).toBeInTheDocument();
    expect(screen.getByText(/The Ugly Duckling/i)).toBeInTheDocument();
  });
});
