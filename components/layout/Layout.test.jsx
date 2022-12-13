import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component tests', () => {
  it('renders Layout component', () => {
    render(<Layout />);

    const element = screen.getByTestId('layout');

    expect(element).toBeInTheDocument();
  });
});
