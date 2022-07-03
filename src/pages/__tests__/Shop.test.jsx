import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../AppContext';
import Shop from '../Shop';

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

function ShopContext({ data, category, sorting }) {
  const context = useMemo(
    () => ({
      data,
      category,
      sorting,
      setCategory: jest.fn,
      setSorting: jest.fn,
    }),
    [category, sorting]
  );
  return (
    <AppContext.Provider value={context}>
      <Shop />
    </AppContext.Provider>
  );
}

ShopContext.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  category: PropTypes.string.isRequired,
  sorting: PropTypes.shape({ alpha: PropTypes.string, price: PropTypes.string })
    .isRequired,
};

describe('rendering data', () => {
  it('renders correctly with one item', () => {
    const data = [
      { id: '1', title: 'Alice in Wonderland', price: 19.99, category: 'A' },
    ];
    const sorting = { alpha: '', price: '' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    expect(
      screen.getByRole('heading', { name: /alice in wonderland/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/19.99/i)).toBeInTheDocument();
  });

  it('renders correctly with three items', () => {
    const data = [
      { id: '1', title: 'Alice in Wonderland', price: 9.99, category: 'A' },
      { id: '2', title: 'Alice in Wonderland', price: 9.99, category: 'B' },
      { id: '3', title: 'Alice in Wonderland', price: 9.99, category: 'C' },
    ];
    const sorting = { alpha: '', price: '' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    const elements = screen.getAllByRole('heading', {
      name: /alice in wonderland/i,
    });
    expect(elements.length).toBe(3);
  });
});

describe('test filter and sorting buttons - manual category selection', () => {
  const data = [
    {
      id: '1',
      title: 'Beauty and the Beast',
      price: 12.99,
      category: 'bea',
    },
    {
      id: '2',
      title: 'Cinderella',
      price: 10.99,
      category: 'cin',
    },
    {
      id: '3',
      title: 'The Ugly Duckling',
      price: 9.99,
      category: 'ugl',
    },
  ];

  it('category "all" works', () => {
    const sorting = { alpha: '', price: '' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    expect(screen.getByText(/Beauty and the Beast/i)).toBeInTheDocument();
    expect(screen.getByText(/Cinderella/i)).toBeInTheDocument();
    expect(screen.getByText(/The Ugly Duckling/i)).toBeInTheDocument();
  });

  it('category filtering works', () => {
    const sorting = { alpha: '', price: '' };
    renderWithRouter(
      <ShopContext data={data} category="cin" sorting={sorting} />
    );
    expect(screen.queryByText(/Beauty and the Beast/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Cinderella/i)).toBeInTheDocument();
    expect(screen.queryByText(/The Ugly Duckling/i)).not.toBeInTheDocument();
  });

  it('sorting az works', () => {
    const sorting = { alpha: 'az', price: '' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    const cardTitles = screen.getAllByTestId(/card-title/i);
    expect(cardTitles[0].textContent).toMatch(/Beauty and the Beast/i);
    expect(cardTitles[2].textContent).toMatch(/The Ugly Duckling/i);
  });

  it('sorting za works', () => {
    const sorting = { alpha: 'za', price: '' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    const cardTitles = screen.getAllByTestId(/card-title/i);
    expect(cardTitles[0].textContent).toMatch(/The Ugly Duckling/i);
    expect(cardTitles[2].textContent).toMatch(/Beauty and the Beast/i);
  });

  it('sorting price low-high works', () => {
    const sorting = { alpha: '', price: 'lh' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    const cardTitles = screen.getAllByTestId(/card-title/i);
    expect(cardTitles[0].textContent).toMatch(/The Ugly Duckling/i);
    expect(cardTitles[2].textContent).toMatch(/Beauty and the Beast/i);
  });

  it('sorting price high-low works', () => {
    const sorting = { alpha: '', price: 'hl' };
    renderWithRouter(
      <ShopContext data={data} category="all" sorting={sorting} />
    );
    const cardTitles = screen.getAllByTestId(/card-title/i);
    expect(cardTitles[0].textContent).toMatch(/Beauty and the Beast/i);
    expect(cardTitles[2].textContent).toMatch(/The Ugly Duckling/i);
  });
});
