// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]

// declare a function that takes an array as the param
const multiThree = (array) => {
    // create new empty array
    let result = []
    // use forEach to iterate through the array and multiply each num by 3
    array.forEach(num => result.push(num * 3));
    // return the new array
    return result
}

console.log(multiThree(testArr1));


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// --> [-7, 3, 5, 13]

// declare a function that takes an array as the param
const onlyOdd = (array) => {
    // create new empty array
    let result = []
    // use forEach to iterate
    // use modulus to determine if not even
    array.forEach(num => (num % 2 !== 0) ? result.push(num) : null)
    // if not even, push into 
    // if even, don't do anything
    // return the new array
    return result
}

console.log(onlyOdd(testArr2));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// --> "nicework"

// create a function that takes an array as the param

// create a function
// Declare that takes an array as a parameter
const onlyStrings = (array) => {
    // Create an empty array
    let result = []
    // Use .forEach to iterate through the array
    // Use typeof method to determine if it's a string
    // if result is a string, we'll push to the empty array
    array.forEach( data => (typeof data === "string" ? result.push(data) : null ))
    // return the joined array
    return result.join("")
}
console.log(onlyStrings(comboArr));

// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// --> 10
// Use reduce method on array, accessing first and second parameter with variables and adding them together. 


var addThese2 = []
// Create a function that takes in an array
//
const sumOf = (array) =>{
// Check if array is empty. If so return 0. Else, we .reduce() the array to return the sum
   return array.length === 0 ? 0 : (array.reduce((previousValue, currentValue) => previousValue + currentValue))
}
console.log(sumOf(addThese2));
console.log(sumOf(addThese1));
// --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// --> 1

// Function was created that takes in any array
const highNumber = (array) => {
    // use Math.max() on the array to find the largest number
    // use indexOf largest number on the array to find the index of the largest number
    // return largest number
    return array.indexOf(Math.max(...array));
}
console.log(highNumber(indexHighestNumber));

// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]

// declare function that takes two arrays
const noDupes = (array1, array2) => {
    // concat the two arrays
    // use Set() to return an array with uniq values
    return [...new Set(array1.concat(array2))]
}

console.log(noDupes(arr1, arr2))

// manual way with for loops
// declare function with two params
const noDupes2 = (array1, array2) => {
    // delcare new variable for the concat of arg1 and arg2
    let array3 = array1.concat(array2)
    // delcare empty array to hold new values
    let result = []
    // iterate through combined array
    for (let i = 0; i < array3.length; i++) {
        // find values that are NOT inside of the result array
        if (!result.includes(array3[i])) {
            // push unique values into result array
            result.push(array3[i])
        }
    // return the result array
    } return result
}

console.log(noDupes2(arr1, arr2))

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
var arrayLength = 6
var arrayValue = 0
// --> [0, 0, 0, 0, 0, 0]

// declare a function with two params
const fillArray = (length, value) => {
    // create a new Array and use the fill() method
    // return new array filled with regards to the two args
    return Array(length).fill(value)
}

console.log(fillArray(arrayLength, arrayValue));

var arrayLength = 4
var arrayValue = 11
// --> [11, 11, 11, 11]

console.log(fillArray(arrayLength, arrayValue));



// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// declare function that takes a number as an argument
const triangleNum = (num) => {
    // use the triangle number formula to return the sum of the series of numbers leading up to it
    // no iterations needed, just math
    return (num * (num + 1)) / 2
}
var addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// --> 10


var addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// --> 55

var addUp3 = 600
// --> 180300

console.log(triangleNum(addUp1))
console.log(triangleNum(addUp2))
console.log(triangleNum(addUp3))

// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here .
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.