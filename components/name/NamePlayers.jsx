import { useGameContext } from '../../state/GameContext';
import styles from './NamePlayers.module.scss';

const NamePlayers = ({ setNamePlayers }) => {
  const { players, setPlayers } = useGameContext();
  // create text input for each human player to enter their name
  const humanPlayers = players.filter((player) => player.human);
  console.log({ humanPlayers });
  // auto generate name for each bot player
  // update players state
  // proceed to game page

  const onNamesSubmit = (e) => {
    e.preventDefault();
    console.log('Names submitted!');
    console.log(e.target.player3.value);

    setNamePlayers(false);

    setPlayers((prevState) => {
      return prevState.map((state) => {
        const input = `player${state.playerOrder}`;
        console.log('STATE', state);
        console.log('PLAYER', input);

        if (state.human) {
          console.log('VALUE', e.target[input].value);
          state.name = e.target[input].value;
        }

        return state;
      });
    });
  };

  return (
    <div data-testid='name-players' className={styles.NamePlayers}>
      <h3>Enter Names for Human Players</h3>
      <form onSubmit={onNamesSubmit}>
        {humanPlayers.map((human, i) => (
          <label key={human.playerOrder} htmlFor={`player-${i + 1}`}>
            <input
              type='text'
              placeholder={`Player ${i + 1}`}
              id={`player-${i + 1}`}
              name={`player${human.playerOrder}`}
            />
          </label>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NamePlayers;
