import Scoreboard from '../scoreboard/Scoreboard';
import Game from './Game';
import styles from './GamePlay.module.scss';

const GamePlay = () => {
  return (
    <div data-testid='game-play' className={styles.GamePlay}>
      <Game />
      <Scoreboard />
    </div>
  );
};

export default GamePlay;
