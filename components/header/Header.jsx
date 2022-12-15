import styles from './Header.module.scss';

const Header = () => {
  return (
    <header data-testid='header' className={styles.Header}>
      <h1>Hide and Seek</h1>
    </header>
  );
};

export default Header;
