
// QUOTE: Everything in programming is an action that triggers a reaction

// Variables

// LET - YOU CAN CHANGE THE DATA

let username = "Joe Santos"
console.log(username);
// CHANGE DATA BELOW IN USERNAME
username = "Juan Martinez"
console.log(username);


// CONSTANTS - YOU CANT CHANGE THE DATA IN THE VARIABLE

const store = "Macy's"  
// IF I REASSIGN THE DATA IN "STORE" VARIABLE I WILL GET AN ERROR
// store = "Nike"
console.log(store)


// OPERATORS - SYMBOL THAT TELLS THE PROGRAM AN ACTION

// EXAMPLE: 1

let a = 25
a = 25 + 5
console.log(a)

// EXAMPLE 2 - ASSIGNMENT OPERATOR

let x = 25
x +=  10

console.log(x)

// STRING OPERATOR

console.log("ruben" + " " + "esquivel")


// ARRAY - LIST OF VALUES

let listAr = [23, 234, "Billy", "Claudio", {title:"harry potter"} ]

console.log(listAr[3])

//  OBJECTS - A ENTITY THAT HOLDS VALUES AND METHODS
// VERY SIMILAR TO AN ARRAY EXCEPT YOU CAN NEST DIFFERENT THINGS INSIDE OF AN OBJECT
// THE DIFFERENT LISTS BELOW ARE CALLED PROPERTIES

let user = {
    name: "Brendan",
    username: "billy234",
    favoriteMobies: ['SW', 'Lord Of The Rings'],
    age: 24,
    printCity: function () {
        return 'New York City'
    },
    objectA:{
        objectB: 245
    }
}

// IF I WANT GET ACCESS TO A PROPERTY I TYPE IN USER.(property name)

console.log(user.favoriteMobies)