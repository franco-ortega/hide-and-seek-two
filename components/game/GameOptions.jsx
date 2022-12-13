import styles from './GameOptions.module.scss';

const GameOptions = () => {
  const onPlayGameSubmit = (e) => {
    e.preventDefault();

    console.log('Play the game!');
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
        <input type='number' id='human-players' defaultValue={0} />
      </label>
      <label htmlFor='bot-players'>
        Bots
        <input type='number' id='bot-players' defaultValue={0} />
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
      <button>Play Game</button>
    </form>
  );
};

export default GameOptions;
