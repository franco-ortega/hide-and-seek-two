import { useGameContext } from '../../state/GameContext';
import styles from './Scoreboard.module.scss';

const Scoreboard = () => {
  const { players, difficulty, duration } = useGameContext();
  return (
    <div className={styles.Scoreboard} data-testid='scoreboard'>
      <h3>Scoreboard</h3>
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

export default Scoreboard;
