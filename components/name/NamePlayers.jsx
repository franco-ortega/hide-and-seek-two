import { useGameContext } from '../../state/GameContext';
import styles from './NamePlayers.module.scss';

const NamePlayers = () => {
  const { players, setPlayers } = useGameContext();
  // create text input for each human player to enter their name
  const humanPlayers = players.filter((player) => player.human);
  console.log({ humanPlayers });
  // auto generate name for each bot player
  // update players state
  // proceed to game page

  return (
    <div data-testid='name-players' className={styles.NamePlayers}>
      <h3>Select Names for Human Players</h3>
      {humanPlayers.map((human) => (
        <input key={human.playerOrder} type='text' placeholder='Name' />
      ))}
    </div>
  );
};

export default NamePlayers;
