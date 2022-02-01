
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
    favoriteMovies: ['SW', 'Lord Of The Rings'],
    age: 24,
    printCity: function () {
        return 'New York City'
    },
    objectA:{
        objectB: 245
    }
}

// IF I WANT GET ACCESS TO A PROPERTY I TYPE IN USER.(property name)

console.log(user.age)


// BOOLEANS - IS IT TRUE OR FALSE

console.log( 4 > 10)



// CONTROL FLOW
// NOTE: THIS IS HOW YOU CREATE LOGIC FOR YOUR PROGRAMS

// for this part "age >21" is called an expression" this is going to return us back a value
// IT CAN RETURN US A VALUE, BOOLEON, FUNCTION, OR METHOD

// THE WHOLE CODE BELOW IS CALLED A STATEMENT
let age = 22

if( age >= 21){
    console.log("User Can Drink!!!!")
} else {
    console.log('sorry too young go home')
}

// EXPRESSIONS VS STATEMENTS
// EXPRESSION - AS A WAY TO RETURN A BACK A VALUE
// STATEMENT  - IF IT DOESNT TURN BACK A VALUE THEN ITS A STATEMENT

console.log ((20 * 2 ) >= 40 )


// FUNCTIONS - REUSABLE CODE BLOCKS

function printName (first, last) {
    console.log(first + " " + last)
    return first + ' ' + last;
}



printName("Nathan", "Barry")
printName("Billy", "Ray")
printName("Jacen", "Smitch")


// LOOPS - ARE REPEATABLE CODE BLOCKS

for (let i = 1; i < 11; i++) {
    console.log(i)
}

// NULL, INFINITY, NaN, UNDEFINED,

// NULL - MEANS EMPTY



// UNDEFINED = HAPPENS WHEN A VARIABLE IS DECLARED BUT HAS NOTHING THERE OR HASNT BEEN DEFINED BY ANYTHING 
let van;
console.log(van)

// NULL MEANS IT IS GOING TO BE EMPTY
let car = null;
console.log(car)

// INFINITY - IF YOU DEVIDE 1/0 IT IS GOING TO GIVE YOU INFINITY
console.log(1/0)

// NAN - MEANS NOT A NUMBER - THIS CAN HAPPEN IF YOU TRY TO MULTIPLY A NUMBER WITH A STRING
console.log(24 * "Billy")

// UNDEFINED - THIS CAN HAPPEN IF YOU HAVE A VARIABLE BUT YOU HAVENT DECLARED IT YET
// FOR EXAMPLE LETS SAY YOUR TRYING TO REACH A VARIABLE CALL PLAN BUT ITS NOT DEFINED 
plane