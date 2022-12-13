const Home = () => {
  return (
    <div data-testid='home'>
      <p>Welcome to the game.</p>
      <form action=''>
        <label htmlFor='human-players'>
          Number of Human Players: <input type='number' id='human-players' />
        </label>
        <label htmlFor='bot-players'>
          Number of Bot Players: <input type='number' id='bot-players' />
        </label>
        <select name='Difficulty' id='Difficulty'>
          <option value=''>Difficulty</option>
          <option value=''>Easy</option>
          <option value=''>Medium</option>
          <option value=''>Hard</option>
        </select>
        <select name='Length' id='Length'>
          <option value=''>Length</option>
          <option value=''>3 rounds</option>
          <option value=''>5 rounds</option>
          <option value=''>10 rounds</option>
        </select>
        <button>Proceed</button>
      </form>
    </div>
  );
};

export default Home;
