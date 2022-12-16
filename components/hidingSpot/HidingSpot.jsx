import styles from './HidingSpot.module.scss';

const HidingSpot = ({ location }) => {
  const onSpotClick = () => {
    console.log('spot clicked:', location);
  };

  return (
    <button
      className={styles.HidingSpot}
      data-testid='hiding-spot'
      onClick={onSpotClick}
    >
      {location}
    </button>
  );
};

export default HidingSpot;
