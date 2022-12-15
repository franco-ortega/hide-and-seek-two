import { useRouter } from 'next/router';
import { useGameContext } from '../../state/GameContext';
import addPlayerNames from '../../utils/addPlayerNames';
import styles from './PlayerNames.module.scss';

const PlayerNames = ({ setPlayerNames }) => {
  const { players, setPlayers } = useGameContext();
  const router = useRouter();

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
    setPlayerNames(false);

    // proceed to game page
    router.push('/play');
  };

  console.log(players);

  return (
    <div data-testid='name-players' className={styles.PlayerNames}>
      <h3>Enter Names for Human Players</h3>
      <form onSubmit={onNamesSubmit}>
        {humanPlayers}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PlayerNames;
