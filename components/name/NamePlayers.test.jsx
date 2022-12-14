import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import NamePlayers from './NamePlayers';

describe('NamePlayers component tests', () => {
  it('renders NamePlayers component', () => {
    render(
      <GameProvider>
        <NamePlayers />
      </GameProvider>
    );

    const element = screen.getByTestId('name-players');

    expect(element).toBeInTheDocument();
  });
});
