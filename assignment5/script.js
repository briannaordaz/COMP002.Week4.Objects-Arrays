// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// This is the name of the function and the "(start, end)" are the two parameters of the function, when you call it, it will give you the first number you added on the "start", the numbers in between, and the last number you added on the "end"
function idk (start, end) {
    const outcome = []; //const is used to declare a variable, "outcome" is the name of the variable and is being declared to "[ ]" (an empty array)
    for (let i = start; i <= end; i++) {  // This is a for-loop and will make the code inside the function loop, the "let i = start;" declares i to start, and the "i <= end;" tells the code to stop when i is less than or equal to "end", and the "i++" tells the function to keep adding another number to the code.
        outcome.push(i); // this will add a value to the array 
    }
    return outcome;  // this will output the value of the outcome
}
// using console.log is how you call a function
console.log(idk(50, 60)); // output: (11) [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]


// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55
function all(numbers) {
    let amount = 0;
    for (let digits of numbers) {
        amount += digits;
    }
    return amount;
}

console.log(all(idk(1, 10))); // output: 55


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
function reverseCode(cde) {
    const backwards = [];
    for (let i = cde.length - 1; i >= 0; i--) {
        backwards.push(cde[i]);
    }
    return backwards;
}

console.log(reverseCode(["X", "Y", "Z"])); // output: (3) ['Z', 'Y', 'X']


function reverseCodeInPlace(cde) {
    for (let i = 0; i < Math.floor(cde.length / 2); i++) {
        let cal = cde[i];
        cde[i] = cde[cde.length - 1 - i];
        cde[cde.length - 1 - i] = cal;
    }
}

let arrayIdk = [96, 97, 98, 99, 100];
reverseCodeInPlace(arrayIdk);
console.log(arrayIdk); // Output: (5) [100, 99,98, 97, 96]
