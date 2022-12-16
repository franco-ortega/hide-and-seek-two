import { useGameContext } from '../../state/GameContext';
import HidingSpot from './HidingSpot';
import styles from './HidingSpotList.module.scss';

const HidingSpotList = () => {
  const { difficulty } = useGameContext();

  // easy = 3 spots
  // medium = 4 spots
  // hard = 5 spots
  const hidingSpotCount =
    difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 5;

  return (
    <div className={styles.HidingSpotList} data-testid='hiding-spot-list'>
      <HidingSpot />
      <HidingSpot />
      <HidingSpot />
    </div>
  );
};

export default HidingSpotList;
