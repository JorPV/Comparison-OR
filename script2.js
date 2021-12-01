/* const Age = 20; 
const isFemale = true; 
const driverStatus = "bob"; 


// Part 1
if (Age == 18){

    document.write("This person is 18");
    console.log ("This person is 18");

} else if (Age < 18){

    console.log ("This person is yonger than 18 and can't enter the pub");

} else {

    console.log("This person is allowed because is older than 18");
}

// Part 2
if (isFemale){

    console.log("This person is a woman");

} else{

    console.log("This person is not a woman");
}

// Part 3'
if (driverStatus == "bob"){

    console.log("You are allowed to drive"); 

} else{

    console.log("This driver isn't allowed to drive")
} */


/* Comparison && Logical Operators */

// Part 1 : 50% discount

const myAge = 23;

if (myAge >= 18 && myAge <= 25){

    console.log("You get 50% off!");

} else {

    console.log("Sorry, you can't get the discount");
}

// Part 2 : Fun action!

const firstName = "Bram";

if (firstName == "Bram" || firstName === "Bram"){

    console.log("Congratulation Bram, you get a free beer!");

} else{

    console.log("Sorry, only Bram is getting a free beer");
}


// Part 3 : Anniversary discount

const order = 155; 

if (order >= 25 && order < 50 ){

    console.log("You just got a free (veggie) bitterballen");

} else if (order >= 50 && order < 100 ){

    console.log("You get a free portion of nachos");

} else if (order >= 100 ){

    console.log("Voila, a free bottle of champagne!");
    
}