import styles from './GameOptions.module.scss';

const GameOptions = () => {
  const onPlayGameSubmit = (e) => {
    e.preventDefault();

    console.log('Play the game!');
    console.log(e.target[0].value);
    console.log(e.target.humans.value);
    console.log(e.target.bots.value);
    console.log(e.target.difficulty.value);
    console.log(e.target.duration.value);

    // get info from inputs and selects
    // store difficulty and duration in state
    // prompt user to provide names for human players
    // generate player list
    // proceed to game
  };

  return (
    <form
      data-testid='game-options'
      className={styles.GameOptions}
      onSubmit={onPlayGameSubmit}
    >
      <h2>Game Options</h2>
      <p>Select the number of Players:</p>
      <label htmlFor='human-players'>
        Humans
        <input
          type='number'
          id='human-players'
          name='humans'
          defaultValue={0}
        />
      </label>
      <label htmlFor='bot-players'>
        Bots
        <input type='number' id='bot-players' name='bots' defaultValue={0} />
      </label>
      <label htmlFor='difficulty'>
        <p>Select the Difficulty:</p>
        <select name='difficulty' id='difficulty'>
          <option value=''></option>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
      </label>
      <label htmlFor='duration'>
        <p>Select the Duration:</p>
        <select name='duration' id='duration'>
          <option value=''></option>
          <option value='3'>3 rounds</option>
          <option value='5'>5 rounds</option>
          <option value='7'>7 rounds</option>
        </select>
      </label>
      <button>Proceed</button>
    </form>
  );
};

export default GameOptions;
