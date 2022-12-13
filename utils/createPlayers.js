export default function createPlayers(humans, bots) {
  const namelessPlayers = [];

  while (humans || bots) {
    if (humans) {
      namelessPlayers.push({
        human: true,
        name: '',
        score: 0,
        playerOrder: namelessPlayers.length + 1
      });

      humans--;
    }

    if (bots) {
      namelessPlayers.push({
        human: false,
        name: '',
        score: 0,
        playerOrder: namelessPlayers.length + 1
      });

      bots--;
    }
  }

  return namelessPlayers;
}
