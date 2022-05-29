// N people are taking part in the donut eating competition.To win, you need to eat as many donuts as
//     possible in 10 minutes.Display on the screen the result of 3 winners and the worst result.
//      (Hint: The program allocates dynamic memory for an array of n elements and requests the
//         array from a keyboard.Try sorting the data using different methods.The case when
//         several participants ate the same number of donuts should not be considered).
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
function bubbleSort(arr) {
  let needIteration = true;
 
  while (needIteration) {
    needIteration = false;
 
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j + 1];
 
          arr[j + 1] = arr[j];
 
          arr[j] = temp;
 
          needIteration = true;
        }
      }
    }
  }
}
 
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
 
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
 
    const temp = arr[min];
 
    arr[min] = arr[i];
 
    arr[i] = temp;
  }
}
 
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const keyItem = arr[i];
 
    let j = i - 1;
 
    while (j >= 0 && keyItem < arr[j]) {
      const temp = arr[j + 1];
 
      arr[j + 1] = arr[j];
 
      arr[j] = temp;
 
      j--;
    }
  }
}
 
const sortTypes = {
  1: bubbleSort,
  2: selectionSort,
  3: insertionSort,
};
 
async function main() {
  const biddersNum = Number(await ask("Enter the number of bidders: "));
 
  let bidders = [];
 
  for (let i = 0; i < biddersNum; i++) {
    const donuts = await ask(
      `Enter the number of donuts eaten by participant ${i + 1}: `
    );
    bidders.push(donuts);
  }
 
  bidders = Array.from(new Set(bidders));
 
  const sortType = Number(
    await ask(
      "Enter sort type:\n" +
        "1 - Outputting the result using Bubble sort\n" +
        "2 - Outputting the result using Sort by selection method\n" +
        "3 - Outputting the result using Insert sort\n"
    )
  );
 
  sortTypes[sortType](bidders);
 
  if (bidders.length > 2) {
    console.log(
      `First place when to participant who ate ${
        bidders[bidders.length - 1]
      } donuts`
    );
    console.log(
      `Second place when to participant who ate ${
        bidders[bidders.length - 2]
      } donuts`
    );
    console.log(
      `Third place when to participant who ate ${
        bidders[bidders.length - 3]
      } donuts`
    );
    console.log(`The worst result corresponds to ${bidders[0]} donuts`);
  } else {
    console.log(`You've entered less than 3 unique results`);
  }
 
  rl.close();
}
 
main();
Enter the number of bidders: 6
Enter the number of donuts eaten by participant 1: 14
Enter the number of donuts eaten by participant 2: 12
Enter the number of donuts eaten by participant 3: 16
Enter the number of donuts eaten by participant 4: 10
Enter the number of donuts eaten by participant 5: 12
Enter the number of donuts eaten by participant 6: 14
Enter sort type:
1 - Outputting the result using Bubble sort
2 - Outputting the result using Sort by selection method
3 - Outputting the result using Insert sort
1
First place went to the participant who ate 16 donuts
Second place went to the participant who ate 14 donuts
Third place went to the participant who ate 12 donuts
The worst result corresponds to 10 donuts  

// To reverse a word, push the given word to stack(letter by letter) and then, pop letters from the stack.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
async function main() {
  const word = await ask("Please enter the word or string: ");
  const stack = [];
 
  for (const letter of word) {
    stack.push(letter);
  }
 
  let reversedWord = "";
 
  while (stack.length) {
    reversedWord += stack.pop();
  }
 
  console.log(`Reversed: ${reversedWord}`);
 
  rl.close();
}
 
main();
// Please enter the word or string:
// basic of programming
// Reversed:
// gnimmargorp fo cisab


The pizza delivery service processes its orders on the first come, first served
basis.After a client has paid for his / her order, he / she is added to the online waiting list.
After the pizza is ready, the information is passed to a courier, saved to a file, and removed from the waiting list.
Display the number of customers who are currently waiting for an order. (Hint: to implement the task in C,
    use the structure that describes the concept of an order, with the properties: visitor's name, 
    delivery address, order, total cost.An order is written from the waiting list to the file when it is deleted).


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs/promises");
 
function ask(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}
 
async function userMenu() {
    return Number(
        await ask(
            "1) Add order to the queue\n" +
            "2) Delete the order from the queue\n" +
            "3) Count orders\n" +
            "4) Output on display\n" +
            "0) Exit the program\n"
        )
    );
}
 
async function addOrder(queue) {
    const orderData = {};
    orderData.name = await ask("Enter the name: ");
    orderData.address = await ask("Enter the address: ");
    orderData.order = [];
 
    let totalAmount = 0;
 
    while (true) {
        const pizzaData = {};
        pizzaData.name = await ask("Enter the name of the pizza: ");
        pizzaData.cost = await ask("Enter the cost of the pizza: ");
        pizzaData.quantity = Number(await ask("Enter the quantity: "));
        totalAmount += pizzaData.cost * pizzaData.quantity;
 
        orderData.order.push(pizzaData);
 
        if (!Number(await ask("Finish order 0-yes 1-no\n"))) {
            break;
        }
    }
 
    orderData.amount = totalAmount;
 
    console.log(`Total amount $${orderData.amount}`);
 
    queue.push(orderData);
}
 
async function deleteOrder(queue) {
    if (queue.length > 0) {
        const order = queue.shift();
 
        await fs.writeFile(
            "./order.txt",
            "______________________________________________\n" +
            ` Name ${order.name} | Address ${order.address} | Total amount ${order.amount}\n` +
            "______________________________________________\n",
            {
                flag: "a+",
            }
        );
 
        console.log("The order is deleted.");
    }
}
 
function countOrder(queue) {
    if (queue.length === 0) {
        console.log("No orders");
        return;
    }
 
    console.log(`Number of clients ${queue.length}`);
}
 
function outputOnDisplay(queue) {
    let counter = 1;
    for (const order of queue) {
        console.log("-".repeat(80));
        console.log(`Order ${counter}`);
        console.log(`Name ${order.name}`);
        console.log(`Address ${order.address}`);
        console.log(`Total amount ${order.amount}`);
        console.log("-".repeat(80));
    }
}
 
const menuItems = {
    1: addOrder,
    2: deleteOrder,
    3: countOrder,
    4: outputOnDisplay,
};
 
async function main() {
    const queue = [];
 
    while (true) {
        const choice = await userMenu();
 
        if (!choice) {
            break;
        }
 
        await menuItems[choice](queue);
    }
 
    rl.close();
}
 
main();







class Building {
  constructor(purpose, address, floorsNumber, wallMaterial) {
    this.purpose = purpose;
    this.address = address;
    this.floorsNumber = floorsNumber;
    this.__wallMaterial = wallMaterial;
  }
 
  toString() {
    return `The purpose is ${this.purpose}. Address: ${this.address}. Number of floors: ${this.floorsNumber} and wall material is ${this.__wallMaterial}`;
  }
}
 
const cafe = new Building(
  "organization of recreation",
  "London, Baker Street",
  2,
  "brick"
);
 
console.log("Information about the cafe:");
console.log(cafe.toString());
 
const shop = new Building(
  "organization of shopping",
  "London, Crawford street",
  1,
  "wood"
);
 
console.log("Information about the shop:");
console.log(shop.toString());
The result:

Information about the cafe:
The purpose is organization of recreation. Address: London, Baker Street. The number of floors – 2; the wall material – brick.
Information about the shop:
The purpose is organization of shopping.Address: London, Crawford Street.The number of floors – 1; the wall material – wood.




class Wall {
  constructor(material, height) {
    this.material = material;
    this.height = height;
  }
 
  toString() {
    return `Material is ${this.material}, height = ${this.height} ft.`;
  }
}
 
class Furniture {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
 
  toString() {
    return `name = ${this.name}, cost = ${this.cost}$`;
  }
}
 
class Apartment {
  constructor(street, apartmentNo, material, height, furniture) {
    this.street = street;
    this.apartmentNo = apartmentNo;
    this.walls = new Wall(material, height);
    this.furniture = furniture;
  }
 
  toString() {
    return `The address is '${this.street} St' ${
      this.apartmentNo
    }, walls ${this.walls.toString()}, furniture=[\n${this.furniture.join(
      "\n"
    )}]`;
  }
 
  getTotalFurnitureCost() {
    return this.furniture.reduce((cost, element) => cost + element.cost, 0);
  }
}
 
const furniture = [
  new Furniture("bed", 150),
  new Furniture("cupboard", 250),
  new Furniture("table", 35),
  new Furniture("armchair", 80),
];
 
const flat = new Apartment("Bronco", 3050, "brick", 23, furniture);
 
console.log("Information about the apartment: " + flat.toString());
console.log(`Total furniture cost is ${flat.getTotalFurnitureCost()}`);
The result:

Information about the apartment: The address is 'Bronco St' 3050, walls Material is brick, height = 23 ft., furniture=[
name = bed, cost = 150$
name = cupboard, cost = 250$
name = table, cost = 35$
name = armchair, cost = 80$]
Total furniture cost is $515

