import { useGameContext } from '../../state/GameContext';
import addPlayerNames from '../../utils/addPlayerNames';
import styles from './NamePlayers.module.scss';

const NamePlayers = ({ setNamePlayers }) => {
  const { players, setPlayers } = useGameContext();

  // create text input for each human player to enter their name
  const humanPlayers = players
    .filter((player) => player.human)
    .map((human, i) => (
      <label key={human.playerOrder} htmlFor={`player-${i + 1}`}>
        <input
          type='text'
          placeholder={`Player ${i + 1}`}
          id={`player-${i + 1}`}
          name={`player${human.playerOrder}`}
        />
      </label>
    ));

  // add player names and create bot names
  const onNamesSubmit = (e) => {
    e.preventDefault();
    setPlayers((prevState) => addPlayerNames(prevState, e));
    setNamePlayers(false);

    // proceed to game page
  };

  return (
    <div data-testid='name-players' className={styles.NamePlayers}>
      <h3>Enter Names for Human Players</h3>
      <form onSubmit={onNamesSubmit}>
        {humanPlayers}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NamePlayers;
