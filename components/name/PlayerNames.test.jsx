import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { GameProvider } from '../../state/GameContext';
import PlayerNames from './PlayerNames';

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

// setup a new mocking function for push method
const pushMock = jest.fn();

// mock a return value on useRouter
useRouter.mockReturnValue({
  query: {},
  // return mock for push method
  push: pushMock
  // ... add the props or methods you need
});

describe('PlayerNames component tests', () => {
  it('renders PlayerNames component', () => {
    render(
      <GameProvider>
        <PlayerNames />
      </GameProvider>
    );

    const element = screen.getByTestId('name-players');

    expect(element).toBeInTheDocument();
  });
});
