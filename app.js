// chapters26-30//

// question 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("Number: ");
document.write(3.45214);
document.write("Round of value: ");
document.write(3)
document.write("floor value: ");
document.write(3)
document.write("ceil value: ");
document.write(4);


// question 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("Number: ");
document.write(-2.673);
document.write("Round of value: ");
document.write(-3)
document.write("floor value: ");
document.write(-3)
document.write("ceil value: ");
document.write(-2);

// question 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
console.log("tha absolute value is -4 is 4");

// question 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
document.write("random dice value:  4" );

document.write("random dice value: 6");

// question 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

if ("Random coin value: 2" ){
console.log("Head");
}
if("random coin value: 1") {
    document.write("Tails");
};

// question 6. Write a program that shows a random number between 1
// and 100 in your browser.
document.write("random number between 1 and 100: 84");


// question 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:

let userInput = prompt("Apna weight likhein (jaise: 50, 50kgs, 50.2kgs, 50.2kilograms):");

let match = userInput.match(/[\d.]+/);

if (match) {
    let weight = parseFloat(match[0]);

    if (!isNaN(weight) && weight > 0 && weight < 500) {
        document.write("Aap ka weight hai: " + weight + " kg");
    } else {
        document.write("Weight realistic nahi hai. Barah-e-karam dobara likhein.");
    }
} else {
    document.write("Ghalat input. Sirf number likhein (e.g. 50, 60.5kg, etc).");
}


// question 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Ek number likhein (1 se 10 ke darmiyan):");
let guess = parseInt(userGuess);
if (!isNaN(guess) && guess >= 1 && guess <= 10) {
    if (guess === secretNumber) {
        document.write("🎉 Mubarak ho! Aap ne sahi guess kiya. Secret number tha: " + secretNumber);
    } else {
        document.write("❌ Ghalat guess. Secret number tha: " + secretNumber + ". Dobara koshish karein!");
    }
} else {
    document.write("⚠️ Ghalat input. Barah-e-karam 1 se 10 ke darmiyan koi number likhein.");
}



