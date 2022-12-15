import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../state/GameContext';
import Home from './Home';

describe('Home component tests', () => {
  it('renders Home component', () => {
    render(
      <GameProvider>
        <Home />
      </GameProvider>
    );

    const element = screen.getByTestId('home');

    expect(element).toBeInTheDocument();
  });
});
