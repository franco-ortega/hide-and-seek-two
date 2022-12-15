import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component tests', () => {
  it('renders Header component', () => {
    render(<Header />);

    const element = screen.getByTestId('header');

    expect(element).toBeInTheDocument();
  });
});
