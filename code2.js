//Calculate the number of grades A, B, C, D, and F for the test in a class of 15 people.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
async function main() {
  const grades = await ask("Enter the grades for the test: ");
 
  const results = grades.split(" ").reduce((result, grade) => {
    result[grade] = result[grade] ? result[grade] + 1 : 1;
    return result;
  }, {});
 
  for (const grade of Object.keys(results)) {
    console.log(`Number of ratings ${grade} = ${results[grade]}`);
  }
 
  rl.close();
}
 
main();

// Enter the grades for the test: A A A A A F F D C A F F C A A 
// Number of ratings A = 8
// Number of ratings C = 2
// Number of ratings D = 1
// Number of ratings F = 4