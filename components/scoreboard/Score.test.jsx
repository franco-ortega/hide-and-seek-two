import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import Score from './Score';

describe('Score component tests', () => {
  it('renders Score component', () => {
    render(
      <GameProvider>
        <Score />
      </GameProvider>
    );

    const element = screen.getByTestId('score');

    expect(element).toBeInTheDocument();
  });
});
