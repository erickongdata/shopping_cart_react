import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock(
  '../pages/Home',
  () =>
    function Product() {
      return <div>Home-Page</div>;
    }
);

jest.mock(
  '../pages/Cart',
  () =>
    function Cart() {
      return <div>Cart-Page</div>;
    }
);

jest.mock(
  '../products.json',
  () => ({
    data: [
      {
        id: '1',
        title: 'Beauty and the Beast',
        author: 'Jeanne-Marie Leprince de Beaumont',
        price: 12.99,
        description: 'Beauty and the Beast is a traditional fairy tale',
      },
      {
        id: '2',
        title: 'Cinderella',
        author: 'Charles Perrault',
        price: 10.99,
        description:
          'Illustrations featuring mix of styles in both clothing and architecture',
      },
      {
        id: '3',
        title: 'The Ugly Duckling',
        author: 'Hans Christian Andersen',
        price: 9.99,
        description: 'An ugly duckling spends an unhappy year ostracized',
      },
    ],
  }),
  { virtual: true }
);

describe('Shop page functions', () => {
  it('clicking on a product card link goes to Product page', () => {
    render(<App />);
    const linkShop = screen.getByRole('link', {
      name: /shop/i,
    });
    userEvent.click(linkShop);
    const linkProduct = screen.getByText(/Beauty and the Beast/i);
    expect(linkProduct).toBeInTheDocument();
    userEvent.click(linkProduct);
    expect(
      screen.getByText(/Beauty and the Beast is a traditional fairy tale/i)
    ).toBeInTheDocument();
  });
});

describe('Product page functions', () => {
  it('clicking on add to cart, displays message 1 in cart afterwards', () => {
    render(<App />);
    const linkShop = screen.getByRole('link', {
      name: /shop/i,
    });
    userEvent.click(linkShop);
    const linkProduct = screen.getByText(/Beauty and the Beast/i);
    expect(linkProduct).toBeInTheDocument();
    userEvent.click(linkProduct);
    const AddToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    userEvent.click(AddToCartBtn);
    expect(screen.getByText(/1 in cart/i)).toBeInTheDocument();
  });

  it('adding quantity of 4, displays message 4 in cart afterwards', () => {
    render(<App />);
    const linkShop = screen.getByRole('link', {
      name: /shop/i,
    });
    userEvent.click(linkShop);
    const linkProduct = screen.getByText(/Beauty and the Beast/i);
    expect(linkProduct).toBeInTheDocument();
    userEvent.click(linkProduct);
    const quantitySelect = screen.getByRole('combobox');
    userEvent.selectOptions(quantitySelect, '4');

    const AddToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    userEvent.click(AddToCartBtn);
    expect(screen.getByText(/4 in cart/i)).toBeInTheDocument();
  });
});
