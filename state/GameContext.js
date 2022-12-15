import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]); // list of player objects:
  // human is { human: true, name: '', score: 0 }
  // bot is { human: false, name: '', score: 0 }

  const [difficulty, setDifficulty] = useState(''); // easy, medium, or hard
  const [duration, setDuration] = useState(0); // 3, 5, or 7

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        difficulty,
        setDifficulty,
        duration,
        setDuration
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const {
    players,
    setPlayers,
    difficulty,
    setDifficulty,
    duration,
    setDuration
  } = useContext(GameContext);

  return {
    players,
    setPlayers,
    difficulty,
    setDifficulty,
    duration,
    setDuration
  };
};
