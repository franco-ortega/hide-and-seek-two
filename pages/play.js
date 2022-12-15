import { useGameContext } from '../state/GameContext';

export default function PlayPage() {
  const { players } = useGameContext();

  return (
    <div>
      <h3>Play Game</h3>
      <ul>
        {players.map((player) => (
          <li key={player.playerOrder}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
