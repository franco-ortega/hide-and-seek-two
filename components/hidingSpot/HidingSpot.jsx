import styles from './HidingSpot.module.scss';

const HidingSpot = ({ hideItem, location }) => {
  const onSpotClick = () => {
    console.log('spot clicked:', location);
    hideItem(location);
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
