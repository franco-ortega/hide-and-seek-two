export default function addPlayerNames(players, event) {
  let botNumber = 0;

  return players.map((player) => {
    const input = `player${player.playerOrder}`;

    if (player.human) player.name = event.target[input].value;
    else {
      botNumber++;
      player.name = `Bot ${botNumber}`;
    }

    return player;
  });
}
