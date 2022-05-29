//There are 3 teams that take part in the darts competition. Each team comprises 4 participants.
// Each participant has 3 attempts.The number of points that each participant gets for one throw is entered from a keyboard.
//The maximum number of points for 1 attempt is 60. Display the winner(i.e.the number of the participant with the biggest number 
//of points and his / her result) from each team.The participant of which team showed the best result ?



const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
async function main() {
  const teamCount = 3;
  const playersCount = 4;
  const teamResults = [];
 
  let maxTeamNumber = 0;
  let winnerNumber = 0;
  let maxResult = 0;
 
  for (let teamNumber = 1; teamNumber < teamCount + 1; teamNumber++) {
    const teamResult = [];
    let maxForPlayer = 0;
    let maxPlayerNumber = 0;
 
    for (
      let playerNumber = 1;
      playerNumber < playersCount + 1;
      playerNumber++
    ) {
      const input = await ask(
        `Enter ${teamNumber} team ${playerNumber} player result: `
      );
      const playerScore = input.split(" ");
      const playerSum = playerScore.reduce(
        (sum, score) => Number(score) + sum,
        0
      );
 
      if (playerSum > maxForPlayer) {
        maxForPlayer = playerSum;
        maxPlayerNumber = playerNumber;
      }
    }
 
    console.log(
      `Team ${teamNumber}. The winner is the player ${maxPlayerNumber} with the score of ${maxForPlayer}`
    );
 
    if (maxForPlayer > maxResult) {
      maxTeamNumber = teamNumber;
      winnerNumber = maxPlayerNumber;
      maxResult = maxForPlayer;
    }
  }
 
  console.log(
    `The best result was shown by player ${winnerNumber} of the team ${maxTeamNumber} with the score of ${maxResult}`
  );
  rl.close();
}
 
main();