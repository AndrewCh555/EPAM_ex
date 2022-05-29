//In the examples below, consider the situation when we need to find out if a student has 
//come to a class, and we have a list of the names of the students who were present in the class.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
async function main() {
  const studentNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
  ];
  console.log("The list of the students is", studentNames);
 
  const searchName = await ask("Enter the name of the student: ");
  let found = false;
 
  for (const name of studentNames) {
    if (name == searchName) {
      console.log(`The student ${searchName} is present in the class.`);
      found = true;
      break;
    }
  }
 
  if (!found) {
    console.log(`The student ${searchName} is absent from class`);
  }
 
  rl.close();
}
 
main();
// The result:

// The list of the students is [ 'Smith',
//   'Johnson',
//   'Williams',
//   'Jones',
//   'Brown',
//   'Davis',
//   'Miller',
//   'Wilson' ]
// Enter the name of the student: Brown
// The student Brown is present in the class.