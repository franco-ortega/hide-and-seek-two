import styles from './HidingSpot.module.scss';

const HidingSpot = () => {
  const onSpotClick = () => {
    console.log('spot clicked!');
  };

  return (
    <button
      className={styles.HidingSpot}
      data-testid='hiding-spot'
      onClick={onSpotClick}
    >
      O
    </button>
  );
};

export default HidingSpot;
