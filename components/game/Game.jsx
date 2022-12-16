import Spot from '../spot/Spot';
import styles from './Game.module.scss';

const Game = () => {
  // round tracker
  // message display area for instructions and results
  // play area with hiding spots

  // player hides item
  // next player seeks item
  // repeat for all players
  // - last player will hide item for first player
  // - first player seeks last

  // HIDE ITEM
  // click on item
  // hiding spot stored in state

  // SEEK ITEM
  // click on item
  // check if clicked item matches hiding spot in state
  // - if yes, increment score of seeking player and display CORRECT message
  // - if no, display WRONG message
  // check to see if the seeker is first player
  // - if no,
  // --- > increment round
  // --- > the seeker proceeds to HIDE ITEM
  // --- > play moves to the next player to SEEK ITEM
  // - if yes, check to see if this is the final round
  // --- if no,
  // --- > increment round
  // --- > the first player proceeds to HIDE ITEM
  // --- if yes, the GAME is OVER
  // ----- > display GAME END message
  // ----- > proceed to RESULTS page

  return (
    <div className={styles.Game} data-testid='game'>
      <h3>Round 1</h3>
      <div>PLAYER ONE hide the item for PLAYER TWO</div>
      <div>PLAYER TWO found the item!</div>
      <div>PLAYER TWO hide the item for PLAYER THREE</div>
      <div>PLAYER THREE did not find the item</div>
      <div>PLAYER THREE hide the item for PLAYER ONE</div>
      <div>PLAYER ONE found the item!</div>
      <div>
        <Spot />
        <Spot />
        <Spot />
      </div>
    </div>
  );
};

export default Game;
