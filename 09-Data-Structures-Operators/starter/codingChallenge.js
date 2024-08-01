///////////////////////////////////////
// Coding challenge #4

const btnEl = document.querySelector('#btn');

btnEl.addEventListener('click', () => {
  const text = document.querySelector('#text').value;

  const words = text.toLowerCase().trim().split('\n');
  console.log(words);

  let counter = 0;
  for (const word of words) {
    let [first, second] = word.trim().split('_');

    const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(counter += 1)}`);
  }
});

//////////////////////////////////////////

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

/*
///////////////////////////////////////
// Coding challenge #3
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents) {
  console.log(`[${min < 45 ? 'FIRST' : 'SECOND'} HALF] ${min}: ${event}`);
}*/

///////////////////////////////////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
///////////////////////////////////////
// Coding challenge #2
/// 1.
const { scored } = game;

for (const [i, player] of scored.entries()) {
  console.log(`🥅 Goal ${i + 1}: ${player}`);
}

/// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const score of odds) average += score;
average /= odds.length;
console.log(average);

/// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/// Bonus 🎁
const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

///////////////////////////////////////
/// Coding challenge #1
/// 1
const [players1, players2] = game.players;
console.log(players1, players2);

/// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

/// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

/// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

/// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored ⚽`);
};

printGoals(...game.scored);

/// 7
team1 < team2 && console.log('🥇 Team one is more likely to win');
team1 > team2 && console.log('🥇 Team two is more likely to win');
*/
