import { render, screen } from '@testing-library/react';
import NamePlayers from './NamePlayers';

describe('NamePlayers component tests', () => {
  it('renders NamePlayers component', () => {
    render(<NamePlayers />);

    const element = screen.getByTestId('name-players');

    expect(element).toBeInTheDocument();
  });
});
