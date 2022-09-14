import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock(
  '../hoc/ScrollToTop',
  () =>
    function scrollToTop({ children }) {
      return <div>{children}</div>;
    }
);

jest.mock(
  '../pages/Home',
  () =>
    function Home() {
      return <div>Home-Page</div>;
    }
);

jest.mock('../data/products', () => {
  const data = [
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
  ];
  return data;
});

function addItemToCart(itemQuantity) {
  const linkShop = screen.getByRole('link', {
    name: /shop/i,
  });
  userEvent.click(linkShop);
  const linkProduct = screen.getByText(/Beauty and the Beast/i);
  userEvent.click(linkProduct);
  const quantitySelect = screen.getByRole('combobox');
  userEvent.selectOptions(quantitySelect, itemQuantity.toString());
  const AddToCartBtn = screen.getByRole('button', { name: /add to cart/i });
  userEvent.click(AddToCartBtn);
}

function addTwoItemsToCart() {
  const linkShop = screen.getByRole('link', {
    name: /shop/i,
  });
  userEvent.click(linkShop);
  const linkProduct1 = screen.getByText(/Beauty and the Beast/i);
  userEvent.click(linkProduct1);
  const AddToCartBtn = screen.getByRole('button', { name: /add to cart/i });
  userEvent.click(AddToCartBtn);

  userEvent.click(linkShop);
  const linkProduct2 = screen.getByText(/cinderella/i);
  userEvent.click(linkProduct2);
  const AddToCartBtn2 = screen.getByRole('button', { name: /add to cart/i });
  userEvent.click(AddToCartBtn2);

  const linkCart = screen.getByTestId('cart');
  userEvent.click(linkCart);
}

describe('Cart page functions', () => {
  it('item appears on Cart page when clicking on add-to-cart on Product page, ', () => {
    render(<App />);
    addItemToCart(1);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    expect(
      screen.getByRole('heading', {
        name: /Beauty and the Beast/i,
      })
    ).toBeInTheDocument();
    // expect(screen.getByText(/Beauty and the Beast/i)).toBeInTheDocument();
  });

  it('item quantity is correct on Cart page', () => {
    render(<App />);
    addItemToCart(4);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    expect(screen.getByText(/quantity: 4/i)).toBeInTheDocument();
  });

  it('total price is correct based on item quantity', () => {
    render(<App />);
    addItemToCart(4);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    expect(
      screen.getByRole('heading', { name: /total: £51\.96/i })
    ).toBeInTheDocument();
  });

  it('remove item button works', () => {
    render(<App />);
    addItemToCart(1);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    const removeBtn = screen.getByRole('button', { name: /remove/i });
    userEvent.click(removeBtn);
    expect(screen.getByText(/no items to display/i)).toBeInTheDocument();
  });

  it('increment item button works', () => {
    render(<App />);
    addItemToCart(1);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    const addBtn = screen.getByRole('button', { name: /\+/i });
    userEvent.click(addBtn);
    expect(screen.getByText(/quantity: 2/i)).toBeInTheDocument();
  });

  it('decrement item button works', () => {
    render(<App />);
    addItemToCart(4);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    const subBtn = screen.getByRole('button', { name: /-/i });
    userEvent.click(subBtn);
    expect(screen.getByText(/quantity: 3/i)).toBeInTheDocument();
  });

  it('quantity input box works', () => {
    render(<App />);
    addItemToCart(1);
    const linkCart = screen.getByTestId('cart');
    userEvent.click(linkCart);
    const inputBox = screen.getByRole('spinbutton');
    userEvent.type(inputBox, '4');
    expect(screen.getByText(/quantity: 14/i)).toBeInTheDocument();
  });
});

describe('Multiple items test', () => {
  it('add two different items to Cart', () => {
    render(<App />);
    addTwoItemsToCart();
    expect(
      screen.getByRole('heading', {
        name: /Beauty and the Beast/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /cinderella/i,
      })
    ).toBeInTheDocument();
  });

  it('total price of two different items to Cart is correct', () => {
    render(<App />);
    addTwoItemsToCart();

    expect(
      screen.getByRole('heading', { name: /total: £23\.98/i })
    ).toBeInTheDocument();
  });
});
