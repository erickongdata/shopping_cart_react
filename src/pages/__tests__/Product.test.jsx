import { render, screen } from '@testing-library/react';
import { useMemo } from 'react';
import Product from '../Product';
import { AppContext } from '../../AppContext';

const data = [
  {
    id: '1',
    title: 'Beauty and the Beast',
    price: 12.99,
    description: 'description1',
    category: 'A',
  },
  {
    id: '2',
    title: 'Cinderella',
    price: 10.99,
    description: 'description2',
    category: 'B',
  },
  {
    id: '3',
    title: 'The Ugly Duckling',
    price: 9.99,
    description: 'description3',
    category: 'C',
  },
];

function ProductContext() {
  const context = useMemo(
    () => ({
      cart: [],
      data,
      handleSubmitQuantity: jest.fn,
    }),
    []
  );
  return (
    <AppContext.Provider value={context}>
      <Product />
    </AppContext.Provider>
  );
}

describe('rendering data', () => {
  it('renders item with default productId = 1 correctly', () => {
    render(<ProductContext />);
    expect(screen.getByText(/beauty and the beast/i)).toBeInTheDocument();
    expect(screen.getByText(/Product code: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/12\.99/i)).toBeInTheDocument();
    expect(screen.getByText(/description1/i)).toBeInTheDocument();
  });
});
