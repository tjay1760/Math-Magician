import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home should render correctly', () => {
  it('should display sentence', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to our calculator website/i)).toBeInTheDocument();
  });

  it('should display text', () => {
    render(<Home />);
    expect(screen.getByText(/Its not only calculations but our websites also gives incitefull quotes/i)).toBeInTheDocument();
  });
});
