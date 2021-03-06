// Challenges

// Consider this variable:
var person = {
  firstName: "Arthur",
  lastName: "Dent",
  message: function(){
    return `${person.firstName} ${person.lastName} is from ${person.homePlanet}`},
}
// Write the code that accesses the first name of the person object.
console.log (person.firstName);
// Write the code that accesses the last name of the person object.
console.log (person.lastName);
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"; // this adds homePlanet: "Earth" into object
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// person.message = function(){
//                     return `${person.firstName} ${person.lastName} is from ${person.homePlanet}`},

console.log(person.message());





// Consider this variable:
var product = {
  name: "chair", price: 14.99
}
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

const describeProduct = (obj) => {
    return (`The product is a ${product.name}. It costs $${product.price}.`);
}
console.log (describeProduct(product));



// Consider this variable:
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  theLunch: function (){
      return `The ingredients for ${this.name} ${this.type} are ${this.ingredients}`;
  },
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients);

// Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2]);

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const thisSandwich = (object) =>{
    return `The ingredients for ${lunch.name} ${lunch.type} are ${lunch.ingredients}`;
}
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

console.log (thisSandwich(lunch));
console.log (lunch.theLunch());






// Consider this variable:
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.
const cats =(obj)=>{
  return obj.filter(value=>{
    return value.type === "cat"// if type === "cat" 
  })
}
console.log(cats(animals));
// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.
const onlyNames =(obj)=>{
  return obj.map(value=>{
    return value.name
  })
}
console.log(onlyNames(animals));



// Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
// Write the code that destructures the author object and makes the following work:
// console.log(`${name} is a ${genre} author`)

// --> "H. G. Wells is a science fiction author"
var {name, genre} = author
console.log(`${name} is a ${genre} author`)






// Consider this variable:
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
const describePokemon=(obj)=>{
  var {species, pokemon_type} = obj
  return `${species} is a ${pokemon_type} Pokemon`
}



console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"