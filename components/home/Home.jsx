import GameOptions from '../game/GameOptions';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div data-testid='home' className={styles.Home}>
      <p>Welcome to the game.</p>
      <GameOptions />
    </div>
  );
};

export default Home;
