// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("areYouTired", () => {
    it("returns drink coffee or keep working based on input", () => {
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
    })
})

// Write the function that will make the test pass.

const areYouTired = (string) => {
    if (string === "yes"){
        return "drink coffee"
    } else if ("no") {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("areYouStressed", () => {
    it("returns relax or keep going depending on input", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
    })
})

// Write the function that will make the test pass.

const areYouStressed = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", ()=>{
it("returnbudget if is lower than 300", () => {
    expect (inBudget (250)).toEqual("In Budget")
    expect(inBudget (300)).toEqual("Not in Budget")
})

})
// Write the function that will make the test pass.

const inBudget = (number) => {

    if (number < 300 ){
        return  "In Budget"
    } else {
        return "Not in Budget"

    }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("smallerNumber", () => {
    it("returns the smaller number of the two input numbers", () => {
        expect(smallerNumber(6, 2)).toEqual(2)
        expect(smallerNumber(500, -500)).toEqual(-500)
        expect(smallerNumber(0, 0)).toEqual(0)
    })
})


// Write the function that will make the test pass.

const smallerNumber = (number1, number2) => {
    let smallestNumber
    number1 < number2 ? smallestNumber = number1 : smallestNumber = number2
    return smallestNumber
} 

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("oddNumber", () => {
    it("returns if it is an odd number", () => {
        expect(oddNumber(3)).toEqual("is odd")
        expect(oddNumber(6)).toEqual(null)
    })
})

// Write the function that will make the test pass.

const oddNumber = (number) => {
    if (number % 2 === 1) {
    return "is odd"
    } else {
        return null
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.




describe("fruitsColors", () => {

it( "return color of theinput fruit", () => {
 expect(fruitsColors("banana")).toEqual("yellow")
 expect(fruitsColors("apple")).toEqual("red")
 expect(fruitsColors("grape")).toEqual("purple")

})

})


// Write the function that will make the test pass.

const fruitsColors = (string) => {
  if (string === "banana"){
    return "yellow" 
  } else if (string === "apple"){
      return "red"
  } else if (string === "grape"){
      return "purple"

  }
}




// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.