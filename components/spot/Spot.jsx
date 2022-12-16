import styles from './Spot.module.scss';

const Spot = () => {
  const onSpotClick = () => {
    console.log('spot clicked!');
  };

  return (
    <button className={styles.Spot} data-testid='spot' onClick={onSpotClick}>
      O
    </button>
  );
};

export default Spot;
