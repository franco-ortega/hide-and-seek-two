import { useGameContext } from '../../state/GameContext';
import styles from './GamePlay.module.scss';

const GamePlay = () => {
  const { players, difficulty, duration } = useGameContext();

  return (
    <div data-testid='game-play' className={styles.GamePlay}>
      <div>Difficulty: {difficulty}</div>
      <div>Duration: {duration} rounds</div>
      <ul>
        {players.map((player) => (
          <li key={player.playerOrder}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamePlay;
