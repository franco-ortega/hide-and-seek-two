import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import Game from './Game';

describe('Game component tests', () => {
  it('renders Game component', () => {
    render(
      <GameProvider>
        <Game />
      </GameProvider>
    );

    const element = screen.getByTestId('game');

    expect(element).toBeInTheDocument();
  });
});
