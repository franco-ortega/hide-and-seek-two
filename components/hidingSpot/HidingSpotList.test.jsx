import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import HidingSpotList from './HidingSpotList';

describe('HidingSpotList component tests', () => {
  it('renders HidingSpotList component', () => {
    render(
      <GameProvider>
        <HidingSpotList />
      </GameProvider>
    );

    const element = screen.getByTestId('hiding-spot-list');

    expect(element).toBeInTheDocument();
  });
});
