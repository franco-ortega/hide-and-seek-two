import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import GameView from './GameView';

describe('GameView component tests', () => {
  it('renders GameView component', () => {
    render(
      <GameProvider>
        <GameView />
      </GameProvider>
    );

    const element = screen.getByTestId('game-play');

    expect(element).toBeInTheDocument();
  });
});
