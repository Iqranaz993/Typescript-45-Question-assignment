"use strict";
//02: Personal Message: Store a person’s name in a variable, and print 
// a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
let x1 = "hania";
console.log("Hello" + " " + "would you like to leran some typescript today?");
//03. store a person name in a varibale, and than print that persons name in lowercase, uppercase and titlecase
let persons_name = "haseeb";
//lowercase
console.log(persons_name.toLocaleLowerCase());
//uppercase
console.log(persons_name.toUpperCase());
//titlecase
console.log(persons_name.charAt(0).toUpperCase() + persons_name.slice(1));
//04.Famous Quote:find a quote from a famous person you admire. print the quote and
// name of its author.your output should look something like the following, including the quotation marks.
console.log('Tony Robbin Once said,"Setting goals is the first step in turning the invisible into the visible"');
//05:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let messageNew = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(messageNew);
//6. stripping names: store a person name, and include some whitespace characters at the begining and end of the name
//make sure you use each character combination, "\t" and "\n" at leace once. print the name once, so the whitespace around
//the name is displayed.then print the name after stripping the white spaces.
let personName = "\t\n Hania \t\n";
console.log(personName);
let stripping = personName.trim();
console.log(stripping);
//07: Number eight: write Addition, subtraction, multiplication and division operation that each result in the number 8. be sure to enclose your operations in print statement to see the results
//ADDITION
let x = 4;
let y = 4;
console.log(x + y);
//subtraction
let x0 = 10;
let y1 = 2;
console.log(x0 - y1);
//multiplication
let x3 = 2;
let y3 = 4;
console.log(x3 * y3);
//division
let x4 = 16;
let y4 = 2;
console.log(x4 / y4);
// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4);
console.log(6 + 2);
console.log(5 + 3);
console.log(7 + 1);
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
// Print that message.
let favourite_number = 9;
console.log(`my favourite number is ${favourite_number}`);
//10 .Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to
//   write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
//PART 1
// my name is iqra naz
// Date: 2024-03-06
//this program will run simply greeting code
console.log("Hello world");
//PART 2
// my name is iqra naz
// Date: 2024-03-06
//this program will sum the value 
console.log(2 + 5);
//  11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list,
//  one at a time.
let members = ["Rozina", "Sana", "Tehmina", "Samiya", "Saiqa"];
for (let j = 0; j < members.length; j++) {
    console.log(members[j]);
}
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//  The text of each message should be the same, but each message should be personalized with the person’s name.
let persons = ["Rozina", "Sana", "Tehmina", "Samiya", "Saiqa"];
let message = "You're invited to a day filled with laughter and joy as we celebrate my birthday!";
for (let i = 0; i < persons.length; i++) {
    console.log(message + persons[i]);
}
//   13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several 
// examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ['civic', 'bike', 'parado'];
for (let a = 0; a < transportation.length; a++) {
    console.log("i would like to on a " + transportation[a]);
}
;
//  14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three
//  people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_List = ["Rozina", "Hania", "Ayan"];
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear friendz! ` + guest_List[i] + " I would like to invite you to dinner.");
}
;
// 15 .Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// * Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//* Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//* Print a second set of invitation messages, one for each person who is still in your list.
let changeGuest_List = ["Rozina", "Hania", "Ayan"];
for (let i = 0; i < changeGuest_List.length; i++) {
    console.log(`Dear friendz! ` + changeGuest_List[i] + " I would like to invite you to dinner.");
}
;
let not_present = "Hania";
let new_guest = "Anum";
changeGuest_List[1] = new_guest;
for (let i = 0; i < changeGuest_List.length; i++) {
    console.log(`Dear friendz! ` + changeGuest_List[i] + " I would like to invite you to dinner.");
}
;
console.log(`${not_present}  will not coming tommorow dinner.`);
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// * Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//* Add one new guest to the beginning of your array.
//* Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation 
// messages, one for each person in your list.
let moreguest_List = ["Rozina", "Hania", "Ayan"];
let not_Present = "Hania";
let new_Guest = "Anum";
moreguest_List[1] = new_Guest;
for (let i = 0; i < moreguest_List.length; i++) {
    console.log(`Dear friendz! ` + moreguest_List[i] + " I would like to invite you to dinner.");
}
;
moreguest_List.unshift('Iqra', 'Azlan', 'Anaya');
for (let i = 0; i < moreguest_List.length; i++) {
    console.log(`Dear friendz! ` + moreguest_List[i] + " I would like to invite you to dinner.");
}
;
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//* Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a
//  message to that person letting them know you’re sorry you can’t invite them to dinner.
//* Print a message to each of the two people still on your list, letting them know they’re still invited.
//* Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the 
// end of your program.
let guest_table_List = ["Rozina", "Hania", "Ayan"];
let no_present = "Hania";
let neW_guest = "Anum";
guest_table_List[1] = new_guest;
guest_table_List.unshift('Iqra', 'Azlan', 'Anaya');
console.log("unfortunately we can not arrange big table, only two peoples allow.");
while (guest_table_List.length > 2) {
    let remove_guest = guest_table_List.pop();
    console.log(`Sorry friend ${remove_guest} you are not invite for dinner.`);
}
;
for (let i = 0; i < guest_table_List.length; i++) {
    console.log("Dear friendz!" + guest_table_List[i] + " Yes you are still invited for dinner.");
}
;
guest_table_List.splice(0, 2);
console.log(guest_table_List);
//  18. Seeing the World: Think of at least five places in the world you’d like to visit.
// * Store the locations in a array. Make sure the array is not in alphabetical order.
// 01
let places = ["Switzerland", "Japan", "Itli", "Iceland", "Saudia Arabia"];
// 02
// • Print your array in alphabetical order without modifying the actual list.
console.log("Orignal order: " + places);
// 03
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order: " + [...places].sort());
// 04
// • Show that your array is still in its original order by printing it.
console.log("Orignal order: " + places);
// 5
// • Print your array in  reverse Alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order: " + [...places].sort().reverse());
// 6
//. Show that array is still in it's orignal order by printing it again.
console.log("Orignal order: " + places);
// 7
// • Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reversed order: " + places);
// 8
// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("orignal order: " + places);
// 9
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Alphabetic order: " + places);
// 10
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse();
console.log("reversed Alphabetic order: " + places);
//  19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are 
// inviting to dinner.
let dinner_guest_List = ["Rozina", "Hania", "Ayan"];
console.log(`I'm finally invited ${dinner_guest_List.length} people to dinner`);
//  20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
// or anything else you’d like. Write a program that creates a list containing these items.
let languages = ["Urdu", "chinese", "Arabic", "English", "Hindi", "French"];
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
;
const book = {
    name: "chemistry",
    price: 450,
};
const pencil = {
    name: "myPencil",
    price: 100,
};
// Accessing and printing item details
console.log(`book name: ${book.name}, book price: $${book.price}`);
console.log(`pencil name: ${pencil.name}, pencil price: $${pencil.price}`);
//  22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in
//  one of your programs to produce an index error. Make sure you correct the error before closing the program.
let Flowers = ["Rose", "Lily", "Sun_flower", "Lotus"];
console.log(Flowers[4]);
console.log(Flowers[3]);
//  23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of 
// each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// * Look closely at your results, and make sure you understand why each line evaluates to True or False.
// * Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let number0 = 4;
let number2 = 6;
let car = 'subaru';
let bus = "neha";
// Test 1: Equality check between two strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //periodic true
// Test 2: Equality check between two strings
console.log("Is car === 'subaru'? I predict True.");
console.log(car == 'subaru'); //periodic true
// Test 3: Equality check between a number and its string representation
console.log("Is number0 == '4'? I predict True.");
console.log(number0 == 4); // Prediction: True
// // Test 4: Greater than check between two numbers
console.log("Is number2 > number0? I predict True.");
console.log(number2 > number0); // Prediction: True
// // Test 5: Less than check between two numbers
console.log("Is number0 < number2? I predict True.");
console.log(number0 < number2); // Prediction: True
// Test 6: Equality check between two numbers
console.log("Is number0 == number2? I predict False.");
console.log(number0 == number2); // Prediction: False
//Test 7: Greater than check between two numbers
console.log("Is number0 > number2? I predict false.");
console.log(number0 > number2); // Prediction: false
// Test 8: Equality check between two strings
console.log("Is car == 'neha'? I predict false.");
console.log(car == 'neha'); //periodic false
// Test 9: Equality check between a number and its string representation
console.log("Is number2 == '3'? I predict false.");
console.log(number0 == 3); // Prediction: false
// Test 10: Equality check between two strings
console.log("Is car == bus? I predict False.");
console.log(car == bus); // Prediction: False
//  24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
// write more tests. Have at least one True and one False result for each of the following:
// * Tests for equality and inequality with strings
// * Tests using the lower case function
// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// * Tests using "and" and "or" operators
// * Test whether an item is in a array
// * Test whether an item is not in a array
let n1 = "car";
let n2 = "toyota";
let age = 20;
let array = [1, 2, 3, 4, 5];
let item1 = 3;
let item2 = 6;
// • Tests for equality and inequality with strings
console.log("Is 'n1' !== 'n2'? I perdict true.");
console.log(n1 !== n2); //true
console.log(" Is 'n1' === 'n2'? I perdict false.");
console.log(n1 === n2); //false
// • Tests using the lower case function
console.log("Is n1.toLowercase() ==? I perdict true.");
console.log(n1.toLocaleLowerCase() == n1); //true
console.log("Is car === car.toLowercase() == 'n1'? I perdict false.");
console.log(n1 === n2.toLocaleLowerCase()); //false
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equality
console.log("Is age == 20? I perdict true.");
console.log(age == 20); //true
// inequality
console.log("Is age <= 35? I perdict true.");
console.log(age !== 35); //true
// greater than
console.log("Is age > 30? I perdict false.");
console.log(age > 30); //false
// less than
console.log("Is age < 20 ? I perdict true.");
console.log(age < 20); //true
// greater than or equal to
console.log("Is age >= 30 ? I perdict false.");
console.log(age >= 30); //false
//less than or equal to
console.log("Is age <= 20 ? I perdict true.");
console.log(age <= 20); //true
// • Tests using "and" and "or" operators
// && operator
console.log("Is age > 18 && < 30 ? I perdict true.");
console.log(age > 18 && age < 30); //true
// || operator
console.log("Is age > 30 || < 18? I perdict false.");
console.log(age > 30 || age < 18); //false
// • Test whether an item is in a array
console.log("Is 3 in array?I perdict true.");
console.log(array.includes(item1)); //true
// • Test whether an item is not in a array
console.log("Is 6 not in array? I perdict false.");
console.log(!array.includes(item2)); //false
// 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of
// 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "red";
if (alien_color == "green") {
    console.log("The player just earned 5 points");
}
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// * If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// * If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// * Write one version of this program that runs the if block and another that runs the else block.
let aLien_color = "blue";
if (aLien_color == "blue") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points");
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * If the alien is green, print a message that the player earned 5 points.
// * If the alien is yellow, print a message that the player earned 10 points.
// * If the alien is red, print a message that the player earned 15 points.
let alIen_color = "green";
if (alIen_color == "green") {
    console.log("The player just earned 5 points.");
}
else if (alIen_color == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alIen_color == "red") {
    console.log("The player earned 15 points.");
}
// * Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alIen_color2 = "yellow";
if (alIen_color2 == "green") {
    console.log("The player just earned 5 points.");
}
else if (alIen_color2 == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alIen_color2 == "red") {
    console.log("The player earned 15 points.");
}
let alIen_color3 = "red";
if (alIen_color3 == "green") {
    console.log("The player just earned 5 points.");
}
else if (alIen_color3 == "yellow") {
    console.log("The player earned 10 points.");
}
else if (alIen_color3 == "red") {
    console.log("The player earned 15 points.");
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// * If the person is less than 2 years old, print a message that the person is a baby.
// * If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// * If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// * If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// * If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// * If the person is age 65 or older, print a message that the person is an elder.
let age_person = 35;
if (age_person < 2) {
    console.log("the person is baby");
}
else if (age_person < 4) {
    console.log("The person is tolddler");
}
else if (age_person < 13) {
    console.log("The person is kid");
}
else if (age_person < 20) {
    console.log("The person is teenager");
}
else if (age_person < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
//  29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain 
// fruits in your array.
// * Make a array of your three favorite fruits and call it favorite_fruits.
// * Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
// the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Strawberry", "Banana", "Oranges"];
if (favorite_fruits.includes("Banana")) {
    console.log("I really like Bananas!");
}
if (favorite_fruits.includes("Oranges")) {
    console.log("I really like Oranges!");
}
if (favorite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberry!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mango!");
}
if (favorite_fruits.includes("Watermelon")) {
    console.log("I really like Watermelon!");
}
//  30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will 
// print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// * If the username is 'admin', print a special greeting, such as Hello admin, w you like to see a status report?ould
//  Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames = ["Admin", "Noman", "Haris", "Eshal", "Affan"];
for (let user of userNames) {
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
//  31 .No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// * If the list is empty, print the message We need to find some users!
// * Remove all of the usernames from your array, and make sure the correct message is printed.
let users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("We need to find some users!");
}
//  32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// * Make a list of five or more usernames called current_users.
// * Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// * Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
// will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Sana", "Madiha", "Iqra", "Nadeem", "Hamza"];
let new_users = ["Anaya", "Haseeb", "Shayan", "Hunain", "Manahil"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is avaliable.`);
    }
});
//  33 .Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// * Store the numbers 1 through 9 in a array.
// * Loop through the array.
// * Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 
// 7th 8th 9th", and each result should be on a separate line.
let ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal_number.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to
//  print the name of each pizza.
// * Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// * Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizzas.
let favorite_pizza = ["chicken fajita", "chicken tikka", "pepperoni"];
favorite_pizza.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
// and then use a for loop to print out the name of each animal. 
// * Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your
//  program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals_name = ["dog", "cat", "rabbit"];
animals_name.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
//      36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("medium", "Code is Life");
//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function otherMake_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
otherMake_shirt(); // Default large and message
otherMake_shirt("medium"); // Default message, medium size
otherMake_shirt("small", "Dive into Coding"); // Custom message, small size
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple
//sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, 
// at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
// 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a 
// string formatted like this:
// "Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and
//an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing
// different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() 
// that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s 
// Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_album("Atif aslam", "Meri_kahani");
let album2 = make_album("Vital singh", "Hum_tum");
let album3 = make_album("Ali zafar", "Masty");
console.log(album1);
console.log(album2);
console.log(album3);
//number of tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let album4 = make_album("Fakhir", "Mantra");
let album5 = make_album("call", "jillawatan");
let album6 = make_album("Bohemia", "Thousand_thoughts");
console.log(album4);
console.log(album5);
console.log(album6);
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Shams", "Shehzad", "Ibad"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of 
// magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ 
// names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each 
// array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let other_magicians = ["Ebad", "Bungash", "Affan"];
function make_Great(magicians) {
    for (const magician of magicians) {
        console.log(magician);
        console.log(magician + " " + "the great");
    }
}
const magicians_Name = ["Ebad", "Bungash", "Affan"];
console.log(magicians_Name);
//      44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter
//  that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
// function three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
function creat_car(manufacturer, model, option1) {
    return {
        manufacturer,
        model,
        ...option1
    };
}
const mycar = creat_car("tyota", "civic", { color: "black", year: 2023 });
console.log(mycar);
