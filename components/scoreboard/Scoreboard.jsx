import { useGameContext } from '../../state/GameContext';
import Score from './Score';
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
          <Score
            key={player.playerOrder}
            player={player.name}
            score={player.score}
          />
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
