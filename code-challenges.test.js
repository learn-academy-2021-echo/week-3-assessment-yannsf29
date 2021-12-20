// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// describe("Fibonacci sequence", () => {
// // I am describing the goal of the test which is to take in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
//
//     var exemple1 = 10
//     var exemple2 = 6
//
//     it("returns an array with the numbers of the Fibonacci sequence", () => {
//
// // I am explaining that it should return an array with the numbers of the Fibonacci sequence
//
//       expect(Fibonaccisequence(exemple1)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//       expect(Fibonaccisequence(exemple2)).toEqual([1, 1, 2, 3, 5, 8])
// // the expected result

  //   })
  // })




// b) Create the function that makes the test pass.

// const fibonacci = (n) =>            //
//   Array.from({ length: n }).reduce( // The reduce() method executes a user-supplied “reducer” callback function on each element of the array
//     (acc, val, i) => acc.concat(i > 2 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );
//
//   console.log(fibonacci(10));

  // Example input: 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  // Example input: 6
  // Expected output: [1, 1, 2, 3, 5, 8]


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// describe("only odd numbers", () => {
// // I am describing the goal of the test which is to have an in an array and returns a new array of only odd numbers sorted from least to greatest.
// //
//     var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//     var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//
//     it("returns a new array of only odd numbers sorted from least to greatest", () => {
//
// // I am explaining that it returns a new array of only odd numbers sorted from least to greatest
//
//       expect(onlyoddnumbers(fullArr1)).toEqual([-9, 7, 9, 199])
//       expect(onlyoddnumbers(fullArr2)).toEqual([-823, 7, 23])
// the expected result

  //   })
  // })




// b) Create the function that makes the test pass.
// 
// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"],
//     indices = [];
//     // I tried to filter the array, adn be able to sort it for each but I didn't get the result expected.
//
// fullArr1
//     .filter((v, i) => v % 2 && indices.push(i)) //  wiil create a new array with all elements that pass the test implemented by the provided function
//     .sort((a, b) => a - b) // it will classified the elemnt in the array
//     .forEach((v, i) => fullArr1[indices[i]] = v); //  calls a provided callbackFn function once for each element in an array in ascending index order
//
// console.log(fullArr1);



// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// describe("accumulating sum", () => {
// // I am describing the goal of the test .
// var numbersToAdd1 = [2, 4, 45, 9]
// var numbersToAdd2 = [0, 7, -8, 12]
// var numbersToAdd3 = []
//
//
//     it("returns an array of the accumulating sum", () => {
//
// // I am explaining that it should returns an array of the accumulating sum
//
//       expect(accumulatingsum(numbersToAdd1)).toEqual([2, 6, 51, 60])
//       expect(accumulatingsum(numbersToAdd2)).toEqual([0, 7, -1, 11])
//       expect(accumulatingsum(numbersToAdd3)).toEqual([])
// the expected result

  //   })
  // })




// b) Create the function that makes the test pass.
//
// var numbersToAdd1 = [2, 4, 45, 9]
//     let new_array = [];
//     numbersToAdd1.reduce( (prev, curr,i) =>  new_array[i] = prev + curr , 0 ) // The reduce() method returns a single value: the function's accumulated result.
//     console.log(new_array);

    // var numbersToAdd1 = [2, 4, 45, 9]
    // // Excpected output: [2, 6, 51, 60]
    //
    // var numbersToAdd2 = [0, 7, -8, 12]
    // // Expected output: [0, 7, -1, 11]
    //
    // var numbersToAdd3 = []
    // Expected output: []
