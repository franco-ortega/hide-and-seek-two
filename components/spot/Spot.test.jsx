import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import Spot from './Spot';

describe('Spot component tests', () => {
  it('renders Spot component', () => {
    render(
      <GameProvider>
        <Spot />
      </GameProvider>
    );

    const element = screen.getByTestId('spot');

    expect(element).toBeInTheDocument();
  });
});
