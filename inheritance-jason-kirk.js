// Challenges
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car



// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"


// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"


// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// let myCar = new Car("generic car", "myCar year")
// console.log(myCar.wheels()); 
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }

// }

// let myCar = new Car("generic car", "myCar year")
// console.log(myCar.wheels()); 

// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }

// }

// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 

// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.

// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }

// }

// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.

// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// class Volkswagen extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// let myVolkswagen = new Volkswagen("Golf", "2019")
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//     }
//     wheels(){
//         return 4
//     }

// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// class Volkswagen extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// let myVolkswagen = new Volkswagen("Golf", "2019")

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//       this.lights = "off"
//     }
//     wheels(){
//         return 4
//     }
//     lightsOn(){
//         this.lights = "on"
//     }
// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// class Volkswagen extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// let myVolkswagen = new Volkswagen("Golf", "2019")
// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//       this.lights = "off"
//       this.signal = "off"
//     }
//     wheels(){
//         return 4
//     }
//     lightsOn(){
//         this.lights = "on"
//     }
    
// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// class Volkswagen extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// let myVolkswagen = new Volkswagen("Golf", "2019")

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
// class Car{
//     constructor(model, year){
//       this.model = model
//       this.year = year
//       this.lights = "off"
//       this.signal = "off"
//       this.speed = 0
//     }
//     wheels(){
//         return 4
//     }
//     lightsOn(){
//         this.lights = "on"
//     }
    
// }
// class Tesla extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// class Toyota extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }

// class Volkswagen extends Car{
//     constructor(model, year){
//         super(model, year)
//     }
// }
// let myTesla = new Tesla("Model X", "2020")
// console.log(myTesla); 
// let myToyota = new Toyota("Prius", "2021")
// let myVolkswagen = new Volkswagen("Golf", "2019")
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
class Car{
    constructor(model, year){
      this.model = model
      this.year = year
      this.lights = "off"
      this.signal = "off"
      this.speed = 0
    }
    wheels(){
        return 4
    }
    lightsOn(){
        this.lights = "on"
    }
    carInfo(){
        return ``
    }
    
}
class Tesla extends Car{
    constructor(model, year){
        super(model, year)
    }
    speedUp(){
        this.speed += 10
    }
    slowDown(){
        this.speed -= 7
    }
}
class Toyota extends Car{
    constructor(model, year){
        super(model, year)
    }
    speedUp(){
        this.speed += 5
    }
    slowDown(){
        this.speed -= 2
    }
}

class Volkswagen extends Car{
    constructor(model, year){
        super(model, year)
    }
    speedUp(){
        this.speed += 7
    }
    slowDown(){
        this.speed -= 5
    }
}
let myTesla = new Tesla("Model X", "2020")
console.log(myTesla); 
let myToyota = new Toyota("Prius", "2021")
let myVolkswagen = new Volkswagen("Golf", "2019")
// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes