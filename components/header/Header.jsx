import styles from './Header.module.scss';

const Header = () => {
  return (
    <header data-testid='header' className={styles.Header}>
      <h1>Hide and Seek</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Game</li>
          <li>Results</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
