import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock(
  '../pages/Home',
  () =>
    function Home() {
      return <div>Home-Page</div>;
    }
);

jest.mock(
  '../pages/Product',
  () =>
    function Product() {
      return <div>Product-Page</div>;
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
  '../pages/Shop',
  () =>
    function Shop() {
      return <div>Shop-Page</div>;
    }
);

jest.mock(
  '../hoc/ScrollToTop',
  () =>
    function scrollToTop({ children }) {
      return <div>{children}</div>;
    }
);

describe('testing routing with Navbar', () => {
  it('starts on Home page', () => {
    render(<App />);
    expect(screen.getByText(/Home-Page/i)).toBeInTheDocument();
  });

  it('go to Cart page works', () => {
    render(<App />);
    const link = screen.getByTestId('cart');
    userEvent.click(link);
    expect(screen.getByText(/Cart-Page/i)).toBeInTheDocument();
  });

  it('go to Shop page works', () => {
    render(<App />);
    const link = screen.getByTestId('shop');
    userEvent.click(link);
    expect(screen.getByText(/Shop-Page/i)).toBeInTheDocument();
  });

  it('go to Shop then back to Home page works', () => {
    render(<App />);
    const link = screen.getByTestId('shop');
    userEvent.click(link);
    expect(screen.getByText(/Shop-Page/i)).toBeInTheDocument();
    const linkHome = screen.getByRole('link', {
      name: /all things colour/i,
    });
    userEvent.click(linkHome);
    expect(screen.getByText(/Home-Page/i)).toBeInTheDocument();
  });
});
