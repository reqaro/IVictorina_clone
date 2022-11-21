const compUsers = (a, b) => {
  if (a?.points > b?.points) {
    return -1;
  }
  if (a?.points < b?.points) {
    return 1;
  }
  return 0;
};

const sortPlayersByPoints = (users) => {
  const sortedPlayers = users.sort(compUsers);
  return sortedPlayers;
};

export const getWinner = (users) => {
  if (users.length > 0) {
    const winners = [];
    const candidates = [];

    for (let player of users) {
      if (player.points > 0) {
        candidates.push(player);
      }
    }
    // const sortedPlayers = users.sort(compUsers);
    const sortedPlayers = candidates.sort(compUsers);
    for (let user of sortedPlayers) {
      if (user.points === sortedPlayers[0].points) {
        winners.push(user);
      }
    }

    return winners;
  }
};
