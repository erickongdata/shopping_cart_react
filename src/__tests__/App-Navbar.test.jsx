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

describe('testing routing with Navbar', () => {
  it('starts on Home page', () => {
    render(<App />);
    expect(screen.getByText(/Home-Page/i)).toBeInTheDocument();
  });

  it('go to Cart page works', () => {
    render(<App />);
    const link = screen.getByRole('link', {
      name: /cart/i,
    });
    userEvent.click(link);
    expect(screen.getByText(/Cart-Page/i)).toBeInTheDocument();
  });

  it('go to Shop page works', () => {
    render(<App />);
    const link = screen.getByRole('link', {
      name: /shop/i,
    });
    userEvent.click(link);
    expect(screen.getByText(/Shop-Page/i)).toBeInTheDocument();
  });

  it('go to Shop then back to Home page works', () => {
    render(<App />);
    const link = screen.getByRole('link', {
      name: /shop/i,
    });
    userEvent.click(link);
    expect(screen.getByText(/Shop-Page/i)).toBeInTheDocument();
    const linkHome = screen.getByRole('link', {
      name: /fairy tale books/i,
    });
    userEvent.click(linkHome);
    expect(screen.getByText(/Home-Page/i)).toBeInTheDocument();
  });
});
