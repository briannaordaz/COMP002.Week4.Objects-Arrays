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


// this is a function called "all" with a parameter of "numbers"
function all(numbers) {
    let amount = 0;  // this declares the variable (amount) to the value (0)
    for (let digits of numbers) { // this is a for-of loop, it will assign the first element of numbers to the variable (digits) and then it will continue until it reaches the last element.
        amount += digits;  // this is a shorter way of saying "amount = amount + digits", it will first add the values of "amount" and "digits" together and then assign the new value to the variable "amounts"
    }
    return amount;  // this will make the function end and will output the value of the variable "amount"
}
//this is what executes the function. It will take the numbers with in the array (1 to 10) and will add them up making it output 55.
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


// this function is called "reverseCode" and has a parameter called "cde"
function reverseCode(cde) {
    const backwards = [];   // this declares the variable "backwards" to an empty array
    for (let i = cde.length - 1; i >= 0; i--) {  //for-loop, the "let i =" declares the variable (i, which is also a loop counter), "cde.length - 1;" will give the total numbers of the parameter (cde), "i >= 0;" will. make sure that i is greater than or equal to 0 and as long as that is true, the code will continue to loop, "i--" this will make the loop move backwards and will remove 1 each time it iterates
        backwards.push(cde[i]);  //"backwards" is the name of the variable I declared earlier in the code. ".push" will add an element at the end of the array, and "(cde[i]);" is the value that is being added in the array.
    }
    return backwards;  //this tells the function that its the end of the code and returns the value
}

// this executes the code
console.log(reverseCode(["X", "Y", "Z"])); // output: (3) ['Z', 'Y', 'X']


// this is the name of another function called "reverseCodeInPlace" with a parameter of "cde"
function reverseCodeInPlace(cde) {
    for (let i = 0; i < Math.floor(cde.length / 2); i++) {  // the "let i = 0;" declares i to 0, "i <" lets the loop continue running as long as i is less than the value given. "Math.floor(cde.length / 2);" Math.floor will round the output to the nearest integer(whole number), "cde.length" will give out the total number of elements in the array. the " / 2;" will divide the total numbers by 2. "i++" will add a value each time the code iterates
        let cal = cde[i]; // this makes a variable called "cal" and it gets assigned to the value of [i] in the (cde) array
        cde[i] = cde[cde.length - 1 - i]; // this allows the code to be reversed, "cde[i]" is the element at the position we give it. "cde[cde.length - 1 - i];" allows the code to count from the opposite position of the "cde[i]"
        cde[cde.length - 1 - i] = cal; // "cde[cde.length - 1 - i]" is the position at the end of the array. this means that the value of cal gets placed to the position of "cde[cde.length -1 - i]" which is the end of the array instead of the beginning.
    }
}

// this assigns the variable "arrayIdk" to the array "[96, 97, 98"
let arrayIdk = [96, 97, 98, 99, 100];
reverseCodeInPlace(arrayIdk); // The "reverseCodeInPlace" reverses the array in "arrayIdk" while still being in place (not having to create another array and reversing it again)
// This outputs the whole function
console.log(arrayIdk); // Output: (5) [100, 99,98, 97, 96]
