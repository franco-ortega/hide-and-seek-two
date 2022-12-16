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

  const hidingSpots = [];

  for (let i = 0; i < hidingSpotCount; i++) {
    hidingSpots.push(
      <li key={i}>
        <HidingSpot />
      </li>
    );
  }

  return (
    <ul className={styles.HidingSpotList} data-testid='hiding-spot-list'>
      {hidingSpots}
    </ul>
  );
};

export default HidingSpotList;
