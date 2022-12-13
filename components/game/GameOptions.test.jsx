import { render, screen } from '@testing-library/react';
import GameOptions from './GameOptions';

describe('GameOptions component tests', () => {
  it('renders GameOptions component', () => {
    render(<GameOptions />);

    const element = screen.getByTestId('game-options');

    expect(element).toBeInTheDocument();
  });
});
