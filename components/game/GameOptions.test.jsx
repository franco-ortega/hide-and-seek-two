import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import GameOptions from './GameOptions';

describe('GameOptions component tests', () => {
  it('renders GameOptions component', () => {
    render(
      <GameProvider>
        <GameOptions />
      </GameProvider>
    );

    const element = screen.getByTestId('game-options');

    expect(element).toBeInTheDocument();
  });
});
