import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import Scoreboard from './Scoreboard';

describe('Scoreboard component tests', () => {
  it('renders Scoreboard component', () => {
    render(
      <GameProvider>
        <Scoreboard />
      </GameProvider>
    );

    const element = screen.getByTestId('scoreboard');

    expect(element).toBeInTheDocument();
  });
});
