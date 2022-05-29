// A new film was released at the cinema.There is 1 hall in the cinema and it can fit 200 spectators.
//  Every day, a different number of tickets were sold for a new film in the first and second weeks of
//   its running.When did the cinema sell more tickets – during the first or the second week ?
//     What was the revenue of the cinema in the first two weeks of the movie's distribution, if the price of one ticket is $M?
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
async function main() {
  const ticketsFirstWeekPerDay = await ask(
    "Enter the number of tickets sold during the first week (for each day): "
  );
  const ticketsSecondWeekPerDay = await ask(
    "Enter the number of tickets sold during the second week (for each day): "
  );
  const price = Number(await ask("Enter the ticket price: "));
 
  const totalTicketsFirstWeek = ticketsFirstWeekPerDay
    .split(" ")
    .map(Number)
    .reduce((s, c) => s + c, 0);
  const totalTicketsSecondWeek = ticketsSecondWeekPerDay
    .split(" ")
    .map(Number)
    .reduce((s, c) => s + c, 0);
 
  console.log(
    `${totalTicketsFirstWeek} tickets were sold during the first week`
  );
  console.log(
    `${totalTicketsSecondWeek} tickets were sold during the second week`
  );
 
  if (totalTicketsFirstWeek < totalTicketsSecondWeek) {
    console.log(
      `In the second week, the cinema sold ${
        totalTicketsSecondWeek - totalTicketsFirstWeek
      } more tickets than in the first one.`
    );
  } else if (totalTicketsFirstWeek > totalTicketsSecondWeek) {
    console.log(
      `In the first week, the cinema sold ${
        totalTicketsFirstWeek - totalTicketsSecondWeek
      } more tickets than in the second one.`
    );
  } else {
    console.log(
      `The cinema sold the same number of tickets in the first week as in the second week.`
    );
  }
 
  console.log(
    `The total cinema's revenue for two weeks was $${
      (totalTicketsFirstWeek + totalTicketsSecondWeek) * price
    }.`
  );
  rl.close();
}
 
main();
// Enter the number of tickets sold during the first week (for each day): 48 34 67 34 56 78 49
// Enter the number of tickets sold during the second week (for each day): 67 45 87 65 43 78 42
// Enter the ticket price: 5
// 366 tickets were sold during the first week
// 427 tickets were sold during the second week
// In the second week, the cinema sold 61 more tickets than in the first one.
// The total cinema's revenue for two weeks was $3965.