import styles from './Score.module.scss';

const Score = ({ player, score }) => {
  return (
    <li className={styles.Score} data-testid='score'>
      {player} - {score}
    </li>
  );
};

export default Score;
