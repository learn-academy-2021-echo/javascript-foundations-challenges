// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]

// declare new variable multByTen, and set it equal to input array and map it times ten
let multByTen = (arr1).map(arr1 => arr1 * 10)
console.log(multByTen)



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// --> [7, 3, 5, 13]

//Declare a new variable newArray and set it equal to input array odd numbers
let newArray = (array) => {
    return array.filter(value => value % 2 !== 0)
}
console.log(newArray(arr2));


//Write a function that takes in an array of numbers and letters and returns a string with only the letters. //HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"

// We are going to declare a function onlyLetters and then is going to use .filter use the join() to make a string

const getString = (array) => {
    let onlyString = array.filter(value =>{ 
        return typeof value === "string"
    }) 
    return onlyString.join("") 
}
console.log(getString (comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// STRETCH Challenges
// make a declaration
// const positive = (array) => {
// let newArray1 = (array.filter(value => {
//     return typeof value !== 0 && value !== false && value !== null && value !== " "
// }))
// }
// console.log(positive(filterArrayValues))
// const positive = filterArrayValues .filter( value => { 
//     return value % 2 !== 0 || value > 0
// })

// console.log(positive)

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// // --> "jvscrpt s wsm"


const noVowels = (vowels)=> {
let array3 = (vowels.filter (value=> {
    return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !== "u"

}))

}
console.log(noVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]


var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
