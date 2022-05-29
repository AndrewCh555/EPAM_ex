const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));
 
function binarySearch(arr, left, right, target) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
 
    if (arr[middle] == target) {
      return middle;
    }
    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
 
  return -1;
}
 
async function main() {
  const libraryNums = [108, 123, 124, 235, 285, 379, 456, 476, 756, 998];
  console.log("The list of the library card number are,", libraryNums);
 
  const requiredNum = Number(await ask("Enter the library card number: "));
 
  if (requiredNum > 0) {
    const index = binarySearch(
      libraryNums,
      0,
      libraryNums.length - 1,
      requiredNum
    );
 
    if (index == -1) {
      console.log("The reader is not registered in the library.");
    } else {
      console.log(
        `The reader, ${requiredNum}, is registered in the library and took book(s).`
      );
    }
  }
 
  rl.close();
}
 
main();
// The result:

// The list of the library card number are, [ 108, 123, 124, 235, 285, 379, 456, 476, 756, 998 ]
// Enter the library card number: 756
// The reader, 756, is registered in the library and took book(s).
function bubbleSort(arr) {
  let count = 0;
  let needIteration = true;
  while (needIteration) {
    needIteration = false;
 
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
          count += 1;
          needIteration = true;
        }
      }
    }
    return count;
  }
}
 
const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
console.log(`Initial array:`, initData);
const iterationsTestData = bubbleSort(initData);
console.log(`The number of permutations is: ${iterationsTestData}`, `\nSorted array:`, initData);
// The result:

// Initial array: [ 124, 235, 456, 123, 756, 476, 285, 998, 379, 108 ]
// The number of permutations is: 20
// Sorted array: [ 108, 123, 124, 235, 285, 379, 456, 476, 756, 998 ]
function insertionSort(arr) {
  let count = 0;
 
  for (let i = 1; i < arr.length; i++) {
    const keyItem = arr[i];
    let j = i - 1;
 
    while (j >= 0 && keyItem < arr[j]) {
      const temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      count += 1;
      j--;
    }
  }
 return count;
}
 
const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
console.log(`Initial array:`, initData);
const iterationsTestData = insertionSort(initData);
console.log(`The number of permutations is: ${iterationsTestData}`, `\nSorted array:`, initData);
// The result:

// Initial array: [ 124, 235, 456, 123, 756, 476, 285, 998, 379, 108 ]
// The number of permutations is: 20
// Sorted array: [108, 123, 124, 235, 285, 379, 456, 476, 756, 998]

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
 
const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
console.log(`Initial array:`, initData);
selectionSort(initData);
console.log(`Sorted array:`, initData);
The result:

Initial array: [ 124, 235, 456, 123, 756, 476, 285, 998, 379, 108 ]
Sorted array: [108, 123, 124, 235, 285, 379, 456, 476, 756, 998]

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
 
  if (left < n && arr[i] < arr[left]) {
    largest = left;
  }
 
  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }
 
  if (largest != i) {
    const temp = arr[largest];
    arr[largest] = arr[i];
    arr[i] = temp;
 
    heapify(arr, n, largest);
  }
}
 
function heapSort(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
 
  for (let i = arr.length - 1; i >= 1; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
 
    heapify(arr, i, 0);
  }
}
 
const initData = [124, 235, 456, 123, 756, 476, 285, 998, 379, 108];
console.log(`Initial array:`, initData);
heapSort(initData);
console.log(`Sorted array:`, initData);
The result:

Initial array: [ 124, 235, 456, 123, 756, 476, 285, 998, 379, 108 ]
Sorted array: [ 108, 123, 124, 235, 285, 379, 456, 476, 756, 998 ]


