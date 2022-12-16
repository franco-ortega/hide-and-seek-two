import Scoreboard from '../scoreboard/Scoreboard';
import styles from './GamePlay.module.scss';

const GamePlay = () => {
  return (
    <div data-testid='game-play' className={styles.GamePlay}>
      <Scoreboard />
    </div>
  );
};

export default GamePlay;
