const gameObject = () => {
  return (obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  });
};

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number
// of points scored for that player.
const numPointsScored = (playerName) => {
  const result = gameObject()["home"]["players"][playerName];
  if (result) {
    return result["points"];
  } else {
    return gameObject()["away"]["players"][playerName]["points"];
  }
};

//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
const shoeSize = (playerName) => {
  const result = gameObject()["home"]["players"][playerName];
  if (result) {
    return result["shoe"];
  } else {
    return gameObject()["away"]["players"][playerName]["shoe"];
  }
};

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
const teamColors = (teamName) => {
  const result = gameObject()["home"]["teamName"];
  if (result === teamName) {
    return gameObject()["home"]["colors"];
  } else {
    return gameObject()["away"]["colors"];
  }
};

//Build a function, teamNames, that operates on the game object to return an array of the team names.
const teamNames = (teamName) => {
  const result = gameObject()["home"]["teamName"];
  if (result === teamName) {
    return Object.keys(gameObject()["home"]["players"]);
  } else {
    return Object.keys(gameObject()["away"]["players"]);
  }
};

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the
// jersey number's for that team.
const playerNumbers = (teamName) => {
  const playerNumbers = [];
  const result = gameObject()["home"]["teamName"];
  if (result === teamName) {
    const players = Object.keys(gameObject()["home"]["players"]);
    for (player of players) {
      playerNumbers.push(gameObject()["home"]["players"][player]["number"]);
    }
    return playerNumbers;
  } else {
    const players = Object.keys(gameObject()["away"]["players"]);
    for (player of players) {
      playerNumbers.push(gameObject()["away"]["players"][player]["number"]);
    }
    return playerNumbers;
  }
};

//Build a function, playerStats, that takes in an argument of a player's name and returns
//a object of that player's stats.
const playerStats = (playerName) => {
  const result = gameObject()["home"]["players"][playerName];
  if (result) {
    return result;
  } else {
    return gameObject()["away"]["players"][playerName];
  }
};

//bigShoeRebounds, that will return the number of rebounds associated with the player that has
//the largest shoe size.
const bigShoeRebounds = () => {
  let maxHome = 0;
  let maxAway = 0;
  const homePlayers = Object.keys(gameObject()["home"]["players"]);
  for (player of homePlayers) {
    let shoe = gameObject()["home"]["players"][player]["shoe"];
    if (shoe > maxHome) {
      maxHome = shoe;
    }
  }
  const awayPlayers = Object.keys(gameObject()["away"]["players"]);
  for (player of awayPlayers) {
    let shoe = gameObject()["away"]["players"][player]["shoe"];
    if (shoe > maxAway) {
      maxAway = shoe;
    }
  }
  const maxShoe = Math.max(maxHome, maxAway);
  return maxShoe;
};

