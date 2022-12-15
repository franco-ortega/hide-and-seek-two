import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import GamePlay from './GamePlay';

describe('GamePlay component tests', () => {
  it('renders GamePlay component', () => {
    render(
      <GameProvider>
        <GamePlay />
      </GameProvider>
    );

    const element = screen.getByTestId('game-options');

    expect(element).toBeInTheDocument();
  });
});
