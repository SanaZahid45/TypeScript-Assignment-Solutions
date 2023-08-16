console.log("Q no: 2");
//Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Name = "Erick";
let message = "Hello";
console.log(`"${message} ${Name}, would you like to learn some python today?"`);

console.log();
console.log("Q no: 3");
//Name Cases: Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.

function toTitleCase(str: string) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
}

let personName = "Sana Zahid";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

let titleCaseName = toTitleCase(personName);

console.log(titleCaseName); 

console.log();
console.log("Q no: 4");
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let authorName = "AlbertEinstein";
let quote = "A person who never made a mistake never tried anything new."
console.log(`${authorName} once said , "${quote}" `);

console.log();
console.log("Q no: 5");

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
//famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Quaid-e-Azam";
let _quote = "There are two powers in the world. One is represented by the sword and the other by the pen.\nThere is a great competition and rivalry between the two. There is a third power stronger than both.";
let _message =`${famous_person} once said , "${_quote}" `;
console.log(_message);

console.log();
console.log("Q no: 6");
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end 
//of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
//once,so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const personNameWithWhitespace = "\t   Sana Zahid   \n";

// Printing the name with whitespace
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);

// removing whitespace from the name
const strippedName = personNameWithWhitespace.trim();

// Printing the name after removing whitespace
console.log("Stripped Name:");
console.log(strippedName);

console.log();
console.log("Q no: 7");
//Number Eight: Write addition, subtraction, multiplication, and division operations 
//that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log( 2 + 6 );
console.log( 14 - 6 );
console.log( 4 * 2 );
console.log( 16 / 2 ) ;

console.log();
console.log("Q no: 8");
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

// Name = "Sana Zahid"
// Date = 11- 8 -2023
// The work of this program is to create four lines that look like this console.log( 5 + 3 ) where 
// number 8 appearing once on each line.
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)

console.log();
console.log("Q no: 9");
// Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number. Print that message.

// Name = "Sana Zahid"
// Date = 11- 8 -2023
// The work of this program is storing my favourite number in a variable and  printing it with a sentence like
// "My favourite number is _____".
let favourateNumber = 6;
console.log(`My favourate number is ${favourateNumber}.`);


console.log();
console.log("Q no: 10");
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you
// don’t have anything specific to write because your programs are too simple at this point, just add your 
// name and the current date at the top of each program file. Then write one sentence describing what the 
// program does.

console.log();
console.log("Question no 11");
// Names: Store the names of a few of your friends 
// in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let myfreindsName = ["Munazza", "Rimsha", "Arham", "Zaman"];

for (let name of myfreindsName){
    console.log(name);
    
}


console.log();
console.log("Q no: 12");
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, but each message should be 
//  personalized with the person’s name.

const personsName: string[] = ["Munazza", "Rimsha", "Arham", "Zaman"];

for (const name of personsName) {
    console.log(`Hello, ${name}! Sending positive vibes for your day.`);
}

console.log();
console.log("Q no: 13");
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a 
// list that stores several examples. Use your list to print a series of statements about these items, such as
//  “I would like to own a Honda motorcycle.”

const myfavouratemodeoftransports:string [] =["Porsche Car", "Embraer Privarte Jet", "Ducati Sports Bike"];


for (let name of myfavouratemodeoftransports){
console.log(`I would, like to own a ${name}.`);

}
console.log();
console.log("Q no: 14");
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list 
// that includes at least three people you’d like to invite to dinner. Then use your list to print a message 
// to each person, inviting them to dinner.

let listOfGuests: string [] = ["Mr. Daniel", "Miss Mia", "Mr. George"];

for (let guest of listOfGuests){
    console.log(`${guest}, we have the pleasure of inviting you to a unique dinner gathering. Your attendance would be greatly appreciated.`);
    
}

console.log();
console.log("Q no: 15");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
//  a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
//  of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are
//  inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Starting with the program from Exercise 14
// Array of people to invite to dinner
let guestList: string[] = ["Mr. Daniel", "Miss Mia", "Mr. George"];

// Printing invitation messages for each person
for (const guest of guestList) {
    console.log(`${guest}, we have the pleasure of inviting you to a unique dinner gathering. Your attendance would be greatly appreciated.`);
}

// Guest who can't make it
const _unableToAttend: string = guestList[1];

// Updating guest list and inviting a new person
guestList[1] = "Miss Moana";

// Printing a message about the guest who can't make it
console.log(`${_unableToAttend} can't make it to the dinner.`);

// Printing the updated invitation messages for the remaining guests
for (const guest of guestList) {
    console.log(`${guest}, an exclusive dinner awaits you, and we would be delighted if you could join us. Your presence is highly valued.`);
}

console.log();
console.log("Q no: 16");
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
// invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
//  you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print 
// a new set of invitation messages, one for each person in your list.

// Starting with the program from Exercise 15
// let guestcoming:string[] = ["Mr. Daniel", "Miss Mia", "Mr. George"];

// for (let guest of guestcoming){
//     console.log(`${guest}, we have the pleasure of inviting you to a unique dinner gathering. Your attendance would be greatly appreciated.`); 
// }

// let _unabletocome = guestcoming[1];
// guestcoming[1] = "Miss Moana";

// console.log(`${_unabletocome} can't make it to the dinner`);

// for (let name of guestcoming){
//     console.log(`${name}, an exclusive dinner awaits you, and we would be delighted if you could join us. Your presence is highly valued.`)
// }

console.log("Good news! we found a bigger dinner table");

guestList.unshift("Mr. Richy");
guestList.splice(2,0,"Miss Sofia");
guestList.push("Miss Ana");

for (let guest of guestList){
console.log(`${guest}, we've arranged a special dinner and would be honored if you could be part of it. Your presence would make it even\n more meaningful.`);

}

console.log();
console.log("Q no: 17");
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have
//  space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two
//  people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//  your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
// an empty list at the end of your program.


// Starting with the program from Exercise 16

// Inform about the smaller dinner table
console.log("Regrettably, the new dinner table will not arrive in time, limiting our dinner guest list to just two people.");

// Removing guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`${removedGuest}, we're sorry, but we can't invite you to dinner.`);
}

// Printing a message to the two people still on your list
for (const guest of guestList) {
    console.log(`${guest}, you're still invited to join us for a special dinner. We would be honored to have you there.`);
}

// Removing the last two names from your list, so we have an empty list
guestList = [];

// Printing the list to make sure we actually have an empty list at the end of the program
console.log(guestList); 


console.log();
console.log("Q no: 18");
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Array of places to visit

let placesToVisit: string[] = ["Bora Bora", "Venice", "Kyoto", "Cairo", "Paris"];

// Printing the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Printing the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Showing that the original array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Printing the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Showing that the original array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Reversing the order of the list
placesToVisit.reverse();

// Printing the array to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reversing the order of the list again to get back to its original order
placesToVisit.reverse();

// Printing the list to show it's back to its original order
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sorting the array so it's stored in alphabetical order
placesToVisit.sort();

// Printing the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sorting the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Printing the list to show that its order has changed to reverse alphabetical
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);

console.log();
console.log("Q no: 19");
// Dinner Guests: Working with one of the programs from Exercises 14 
// through 18, print a message indicating the number of people you are inviting to dinner.


let _invitation:string [] = ["Mr. Daniel", "Miss Mia", "Mr. George"];

for (let guest of _invitation){
    console.log(`Dear ${guest}, we have the pleasure of inviting you to a unique dinner gathering. Your attendance would be greatly appreciated.`);
    
}

console.log(`The number of people invited to dinner is: ${_invitation.length}`);

console.log();
 console.log("Q no: 20");
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, 
// cities,languages, or anything else you’d like. Write a program that creates a list containing these items.

// Create an array of favorite books
let ListOfRivers: string[] = [
  "Nile River",
  "Amazon River",
  "Yangtze River",
  "Ganges River",
];

// Print the list of favorite books
console.log("My Favorite Rivers:");
for (const river of ListOfRivers) {
  console.log(river);
}

console.log();
console.log("Q no: 21");
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing
//  these items.

interface Nowels {
    nowelName: string,
    author: string,
    genre: string,
    publishedIn: number
};
 
let nowel1 :Nowels = {
    nowelName: "You Are a Badass",
    author: "Jen Sincero",
    genre: "Self-Help, Motivational, Personal Development",
    publishedIn:  2013
};

let nowel2 :Nowels = {
    nowelName: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    genre: " Self-Help, Personal Development",
    publishedIn: 1959
};
  
  // Printing the Nowels
  console.log(nowel1);
  console.log(nowel2);
  
  console.log();
  console.log("Q no: 22");
//   Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//   Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the 
//   program.

// Creating an array of colors
const colors: string[] = ["Grey", "Purple", "Black", "White", "Mink Green"];

// Trying to access an element at an invalid index (index error)
const invalidIndex = 8; // This index is out of bounds for the array
console.log(colors[invalidIndex]); // This will produce an index error


// Correct the error by checking the index before accessing the element
if (invalidIndex >= 0 && invalidIndex < colors.length) {
    console.log(colors[invalidIndex]);
  } else {
    console.log(`Invalid index: ${invalidIndex}`);
  }


console.log();
console.log("Q no: 23")
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
//  the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
  
let bookName = "The Secret";
console.log("Is bookName is equal to The Secret? I predict true.");
console.log(bookName == "The Secret");

let _age = 14;
console.log("Is age is less then 18 ? I predict true.");
console.log(_age < 18);

let isMaking = true;
console.log("Is she making something? I predict true.");
console.log(isMaking);

let studentIdNumber = 4567;
console.log("Is studentIdNumber is equal to 4567 and its data type is number? I predict true.");
console.log(studentIdNumber === 4567);


let eatingChocolate= true;
console.log("Is she eating chocolate? I predict true.");
console.log(eatingChocolate);

let fruit = "Mango";
console.log("Is fruit variable equal to Rasberry? I predict false.");
console.log(fruit == "Rasberry");

let river = 'Nile River';
console.log("Is river equal to 'nile River'? I predict false.");
console.log(river == "nile River");


let isSaturday = false;
console.log("Is today is Saturday? I predict false.");
console.log(isSaturday);

let grade = 'A1';
console.log("Is grade equal to 'A'? I predict false.");
console.log(grade === 'A');

let personName2 = "Fiona";
console.log("Is personName2 is equal to fiona and its type is string? I predicted false.");
console.log(personName2 === "fiona");

console.log();
console.log("Q no: 24");
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
//comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// • Testing for equality and inequality with strings
let colour = "Orange";
console.log("Is colour equal to Orange? I predict true.");
console.log(colour == "Orange");

console.log("Is colour not equal to Orange? I predict true.");
console.log(colour != "Blue");

let car = "Rolls Royce";
console.log("Is car equal to Rolls royce? I predict false.");
console.log(car == "Rolls royce");

console.log("Is car not equal to Rolls Royce? I predict false.");
console.log(car != "Rolls Royce");

// • Tests using the lower case function
let fruit2= "grapes";
console.log("Is grapes lowecase? I predict true.");
console.log(fruit2 === fruit2.toLowerCase());

let message1="I love Coding";
console.log("Is I love Coding lowecase? I predict false.");
console.log(message1 === message1.toLowerCase());

// • Numerical testing involving equality and inequality, greater than and less than, 
//  greater than or equal to, and less than or equal to

let number1 = 25;
let number2 = 20;

let number3 = 39;
let number4 = 30

console.log("Is 25 is equal to 20? I predict false.");
console.log(number1 == number2);

console.log("Is 25 not equal to 20 ? I predict true.");
console.log(number1 != number2);

console.log("Is 39 is equal to 30? I predict false.");
console.log(number3 == number4);

console.log("Is 39 not equal to 30 ? I predict true");
console.log(number3 != number4);

console.log("Is 25 is greater then 20? I predict true.");
console.log(number1 > number2);

console.log("Is 25 is less then 20? I predict false.");
console.log(number1 < number2);

console.log("Is 39 is greater then 30? I predict true.");
console.log(number3 > number4);

console.log("Is 39 is less then 30? I predict false.");
console.log(number3 < number4);

console.log("Is 25 is greater then equal to 20? I predict true.");
console.log(number1 >= number2);

console.log("Is 25 is less then equal to 20? I predict false.");
console.log(number1 <= number2);

console.log("Is 39 is greater then equal to 30? I predict true.");
console.log(number3 >= number4);

console.log("Is 30 is less then equal to 30? I predict false.");
console.log(number3 <= number4);

// .Tests using "and" and "or" operators

let isWashingClothes = true;
let isNotWashingClothes = false;

let isPlaying = true;
let isNotPlaying = false;

console.log("Is she washing clothes and not? I predict false.");
console.log(isWashingClothes && isNotWashingClothes);

console.log("Is she washing clothes or not? I predict true.");
console.log(isWashingClothes || isNotWashingClothes);

console.log("Is Mark is playing and not? I predict false.");
console.log(isPlaying && isNotPlaying);

console.log("Is Mark is playing or not? I predict true.");
console.log(isPlaying || isNotPlaying);

// Testing whether an item is in an array
let fruits = ['Pear', 'Avocado', 'Kiwi'];
console.log("Is 'Mango' in the fruits array? I predict false.");
console.log(fruits.includes('Mango'));

console.log("Is 'Pear' in the fruits array? I predict true.");
console.log(fruits.includes('Pear'));

// Testing whether an item is not in an array

const pastelColors = ["Salmon Pink", "Pale Aqua", "Blush", "Powder Blue"];

console.log("Is 'Seafoam Green' not in the array? I predict true.");
console.log(!pastelColors.includes('Seafoam Green'));

console.log("Is 'Pale Aqua' not in the array? I predict false.");
console.log(!pastelColors.includes('Pale Aqua'));

console.log();
console.log("Q no: 25");
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a 
// value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just 
// earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will
//  have no output.)


let alien_color = "green" ;

if(alien_color === "green"){
console.log("Superb!, you just earned five points!");
}

let $alien_color = "yellow";
if($alien_color === "green"){
    console.log("Superb! you just earned five points!");
    
}


console.log();
console.log("Q no: 26");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

let aliencolor = "green";
if(alien_color === "green"){
    console.log("Superb!, you just earned 5 points for shooting the alien!.");
    
}else{
    console.log("You just earned 10 points!.");
    
}

let aliencolor2 = "red";
if(aliencolor2 === "green"){
console.log("Superb!, you just earned 5 points by shooting the alien!.");

}else{
    console.log("You just earned 10 points!");
    
}

console.log();
console.log("Q no: 27");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_Color = 'green';

if(alien_Color === 'green'){
    console.log("Awesome job! you just earned 5 points!");
}else if(alien_Color === 'yellow'){
    console.log("Awesome job! you just earned 10 points!");
}else if(alien_Color === 'red'){
    console.log("Awesome job! you just earned 15 points!");
}else{
    console.log("Unseen, alien color");
    
}

let alien_Color2 = 'yellow';

if(alien_Color2 === 'green'){
    console.log("Awesome job! you just earned 5 points!");
}else if(alien_Color2 === 'yellow'){
    console.log("Awesome job! you just earned 10 points!");
}else if(alien_Color2 === 'red'){
    console.log("Awesome job! you just earned 15 points!");
}else{
    console.log("Unseen, alien color");
    
}

let alien_Color3 = 'red';

if(alien_Color3 === 'green'){
    console.log("Awesome job! you just earned 5 points!");
}else if(alien_Color3 === 'yellow'){
    console.log("Awesome job! you just earned 10 points!");
}else if(alien_Color3 === 'red'){
    console.log("Awesome job! you just earned 15 points!");
}else{
    console.log("Unseen, alien color");
    
}

console.log();
console.log("Q no: 28");

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let personsAge = 5;

if(personsAge < 2){
    console.log("This person is a baby.");
}else if(personsAge >= 2 && personsAge < 4 ){
    console.log("This person is a toddler.");   
}else if(personsAge >= 4 && personsAge < 13){
    console.log("This person is a kid.");
}else if(personsAge >= 13 && personsAge < 20){
    console.log("This person is a teenager.");
}else if(personsAge >= 20 && personsAge < 65){
    console.log("This person is an adult.");
}else{
    console.log("This person is an elder.");
}

console.log();
console.log("Q no: 29");

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check 
//for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your 
//array, the if block should print a statement, such as You really like bananas!

let favourate_fruits = ["Pomegranate", "Apricot", "Papaya"];

if(favourate_fruits.includes("Pomegranate")){
    console.log("You really like Pomegranates!");
}

if(favourate_fruits.includes("Apricot")){
    console.log("You really like Apricots!");
}

if(favourate_fruits.includes("Avacado")){
    console.log("You really like Avacados!");
}

if(favourate_fruits.includes("Papaya")){
    console.log("You really like Papayas!");
}

if(favourate_fruits.includes("Cherry")){
    console.log("You really like Cherries!")
};

console.log();
console.log("Q no: 30");

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that
// will print a  greeting to each user after they log in to a website. Loop through the array, and print a greeting 
// to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames:string [] = ["Admin", "Mark", "Blaire", "Mike", "Mona", "Lisa"];

for (let name of userNames){
if(name === "Admin"){
console.log(`Hello ${name}, would you like to see a status report`);
}else {
    console.log(`Hello ${name}, thank you for logging in again.`);
    }
}

console.log();
console.log("Q no: 31");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let user_Names:string [] = ["Admin", "Mark", "Blaire", "Mike", "Mona", "Lisa"];

if(user_Names.length === 0){
    console.log("We need to find some users!");
}else{
    for (let name of user_Names){
        if(name === "Admin"){
            console.log(`Hello ${name}, would you like to see a status report`);
        }else {
            console.log(`Hello ${name}, thank you for logging in again.`); 
        }
    }
}

// removing users from array
user_Names = []

if(user_Names.length === 0){
    console.log("We need to find some users!");
}

console.log();
console.log("Q no: 32");
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone 
// has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
// in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message 
// that the person will need to enter a new username. If a username has not been used, print a message saying that 
// the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users = ["Mike", "Nancy", "Perry", "Megan", "Selena"];
let new_users = ["Ell", "Dua", "PERRY", "Bella", "Selena"];

let lowerCaseCurrentUsers = current_users.map(username => username.toLowerCase());

for (let users of new_users){
    let lowerCaseUsername = users.toLowerCase();
    if (lowerCaseCurrentUsers.includes(lowerCaseUsername)){
        console.log(`The username "${users}" is already taken. Please enter a new username.`);
        }else {
            console.log(`The username ${users} is available.`);
    }
}

console.log();
console.log("Q no: 33");
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end 
// in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output 
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
                    //   0,1,2,3,4,5,6,7,8
let Numbers:number [] = [1,2,3,4,5,6,7,8,9];

for (let number of Numbers){
    
let ordinalending:string;
if (number === 1){
    ordinalending = "st"
}else if (number === 2){
    ordinalending = "nd";
}else if (number === 3){
    ordinalending = "rd";
}else{
    ordinalending = "th";
}
console.log(`${number}${ordinalending}`);    
}

console.log();
console.log("Q no: 34");
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for 
// loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should
//  consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really 
//  love pizza!

let favouratePizza:string[] = ["Taco", "Alfredo Sauce", "Buffalo", "Mushroom and Olive"]
;
for (let items of favouratePizza){
    console.log(`I like ${items} pizza.`);
}
console.log("Across different places and cultures, my culinary escapades always include indulging in a slice of my beloved pizza.");

console.log();
console.log("Q no: 35");
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence 
// such as Any of these animals would make a great pet!

let animals = ["Dog", "Cat", "Rabbit"];

for(let i = 0; i < animals.length; i++){
    let animal = animals[i]
    console.log(`A ${animal} would make a great pet.`);
}
console.log("\nThese animals have a common characteristic: They are Popular and Interactive choices for Pets.\nAny of these animals would make a great pet!");

console.log();
console.log("Q no: 36");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
// printed on it. Call the function.

function make_shirt(shirtSize: string, printTextOnShirt: string){
    console.log(`The T-shirt is of size ${shirtSize}, and it features the printed message: "${printTextOnShirt}."`);
}

make_shirt("Small", "I stood for nothing, so I fell for everything")

console.log();
console.log("Q no: 37");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
// a different message.

function make_shirt2(shirtSize: string = "Large", printTextOnShirt: string = "I love typescript"){
        console.log(`The T-shirt is of size ${shirtSize}, and it features the printed message: "${printTextOnShirt}."`);
    }
    make_shirt2()
    make_shirt2("Medium")
    make_shirt2("Small", "Coding is something I truly adore");


console.log();
console.log("Q no: 38");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not 
// in the default country.

function describe_city(cityName: string, itsCountry: string = "Australia"){
    console.log(`${cityName} is in ${itsCountry}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("Berlin", "Germany");
describe_city("Canberra")

console.log();
console.log("Q no: 39");
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country (city: string, country: string){
return `${city}, ${country}`
}
let city1 = city_country("Ottawa","Canada")
let city2 = city_country("Busan","Korea");
let city3 = city_country("Izmir","Turkey");
console.log(city1);
console.log(city2);
console.log(city3);

console.log();
console.log("Q no: 40");
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take
// in an artist name and an album title, and it should return a Object containing these two pieces of information. Use 
// the function to make three dictionaries representing different albums. Print each return value to show that Objects
// are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the 
// album’s Object. Make at least one new function call that includes the number of tracks on an album.


function make_album(artist: string, title: string, tracks?: number): object {
    const album:any = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Drake", "Scorpion", 25);
let album2 = make_album ("Adele", "21", 11);
let album3 = make_album("Beyoncé", "Lemonade");

console.log(album1);
console.log(album2);
console.log(album3);


console.log();
console.log("Q no: 41");
// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.


// string[] is used to indicate the expected data type of elements within an array, 
// providing type safety and clarity in your code.
function show_magicians(magicians:string[]) {
    for (let name of magicians){
   console.log(name);
    }
}
 let magicianNames:string [] = ["Ricky Jay", "Shin Lim", "Max Maven", "Doug Henning"];

 show_magicians(magicianNames)

console.log();
console.log("Q no: 42");
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.

function show_magicians1(magicians:string[]){
    for (let name of magicians){
        console.log(name);
    }
}

function make_great(magicians:string[]):string[] {
    let greatMagicians:string [] = [];
    for (let magician of magicians){
       greatMagicians.push(`the Great ${magician}`)
        
    }
    return greatMagicians;
}

let magicianNames1: string [] = ["Ricky Jay", "Shin Lim", "Max Maven", "Doug Henning"];

let greatMagiciansName : string [] = make_great(magicianNames1);
show_magicians(greatMagiciansName)

console.log();
console.log("Q no: 43");
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
// array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
// separate array. Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

function $show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function $make_great(originalMagicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of originalMagicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

const magicians: string[] = ["Ricky Jay", "Shin Lim", "Max Maven", "Doug Henning"];

const greatMagicians = $make_great([...magicians]); // Creating a copy of the original array

console.log("Original Magicians:");
$show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);



console.log();
console.log("Q no: 44");
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, using a 
//  different number of arguments each time.

 
function makeSandwich(...ingredients: string[]){
console.log("Here's your sandwich with the following ingrediants:");
for (let items of ingredients){
    console.log("- " +items);    
}
console.log("Enjoy your sandwich!");
}

makeSandwich("Roast beef", "horseradish sauce", "caramelized onions");
makeSandwich("Tuna salad", "lettuce", "tomato");
makeSandwich("Hummus", "roasted vegetables", "feta cheese");

console.log();
console.log("Q no: 45");
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
// name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
// name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored
// correctly.

// Imagine you're making a car and you want to keep track of its color and special features. But sometimes, people might not tell you the 
// color or features they want.
// So, you want to set default values in case they don't specify.

// color: color || "Unknown": This means, if someone tells you the color of the car, you'll use that color. But if they don't tell you
// the color, you'll use "Unknown" as the default color.

// feature: feature || "None": Similarly, if someone tells you about a special feature for the car, you'll use that. But if they don't 
// mention any features, you'll use "None" as the default.

// So, these lines make sure your car's color and features are set to real values if provided, and if not, they have sensible defaults like 
// "Unknown" and "None" so that your car's information always makes sense.


function cars(manufacturer:string, model:string, color?:string, feature?:string): object {
     let carDetails = {
        manufacturer:manufacturer,
        model:model,
        color:color || "Unknown",
        feature:feature || "None",
     }
     return carDetails;
}

let car1 = cars("Toyota", "Camry", " Celestial Silver");
let car2 = cars("BMW", "BMW X5", "Mineral White", "Luxurious interior, powerful engines, advanced driving aids");
let car3 = cars("Ferrari", " 812 Superfast", undefined, "V12 engine, aerodynamic excellence, exceptional speed")
console.log(car1);
console.log(car2);
console.log(car3);


