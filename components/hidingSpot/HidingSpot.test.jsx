import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import HidingSpot from './HidingSpot';

describe('HidingSpot component tests', () => {
  it('renders HidingSpot component', () => {
    render(
      <GameProvider>
        <HidingSpot />
      </GameProvider>
    );

    const element = screen.getByTestId('hiding-spot');

    expect(element).toBeInTheDocument();
  });
});
