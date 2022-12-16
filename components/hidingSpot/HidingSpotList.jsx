import HidingSpot from './HidingSpot';
import styles from './HidingSpotList.module.scss';

const HidingSpotList = () => {
  return (
    <div className={styles.HidingSpotList} data-testid='hiding-spot-list'>
      <HidingSpot />
      <HidingSpot />
      <HidingSpot />
    </div>
  );
};

export default HidingSpotList;
