import { useState } from 'react';
import { useGameContext } from '../../state/GameContext';
import createPlayers from '../../utils/createPlayers';
import styles from './GameOptions.module.scss';
import PlayerNames from '../name/PlayerNames';

const GameOptions = () => {
  const { setDifficulty, setDuration, setPlayers } = useGameContext();
  const [playerNames, setPlayerNames] = useState(false);

  const onPlayGameSubmit = (e) => {
    e.preventDefault();
    console.log('Play the game!');

    // get info from inputs
    const humans = Number(e.target.humans.value);
    const bots = Number(e.target.bots.value);

    // generate player list
    const newPlayers = createPlayers(humans, bots);
    setPlayers(() => [...newPlayers]);

    // store difficulty and duration in state
    setDifficulty(e.target.difficulty.value);
    setDuration(e.target.duration.value);

    // prompt user to provide names for human players
    if (humans) setPlayerNames(true);
  };

  return (
    <>
      <form
        data-testid='game-options'
        className={styles.GameOptions}
        onSubmit={onPlayGameSubmit}
      >
        <h2>Game Options</h2>
        <div>
          <p>Select the number of Players:</p>
          <label htmlFor='human-players'>
            Humans
            <input
              type='number'
              id='human-players'
              name='humans'
              // defaultValue={0}
              placeholder='Humans'
            />
          </label>
          <label htmlFor='bot-players'>
            Bots
            <input
              type='number'
              id='bot-players'
              name='bots'
              // defaultValue={0}
              placeholder='Bots'
            />
          </label>
        </div>

        <label htmlFor='difficulty'>
          <p>Difficulty</p>
          <select name='difficulty' id='difficulty'>
            <option value=''></option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </label>
        <label htmlFor='duration'>
          <p> Duration</p>
          <select name='duration' id='duration'>
            <option value=''></option>
            <option value='3'>3 rounds</option>
            <option value='5'>5 rounds</option>
            <option value='7'>7 rounds</option>
          </select>
        </label>

        <button>Proceed</button>
      </form>
      {playerNames && <PlayerNames setPlayerNames={setPlayerNames} />}
    </>
  );
};

export default GameOptions;
