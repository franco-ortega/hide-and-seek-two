import Scoreboard from '../scoreboard/Scoreboard';
import Game from './Game';
import styles from './GameView.module.scss';

const GameView = () => {
  return (
    <div data-testid='game-play' className={styles.GameView}>
      <Game />
      <Scoreboard />
    </div>
  );
};

export default GameView;
