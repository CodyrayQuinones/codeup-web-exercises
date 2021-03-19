"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");

alert("Cool!" + userInput + "That's an awesome color");

var littleMermaidRent = parseFloat(prompt("How many days are you renting the litter mermaid?"));
var brotherBearRent = parseFloat(prompt("How many days are you renting brother bear?"));
var herculesRent = parseFloat(prompt("How many days are you renting hercules?"));

var rentRate = parseFloat(prompt("How much to rent a movie a day?" ));

var rentTotal = ( littleMermaidRent + brotherBearRent +  herculesRent ) * rentRate;


alert("You're final total is : $" + rentTotal.toFixed(2) + ". HAve a great day!")

var googleRate = parseFloat(prompt("How much does Google pay per hour?"));
var googleHours = parseFloat(prompt("How many hours did you work?"));

var amazonRate = parseFloat(prompt("How much does Amazon pay per hour?"));
var amazonHours = parseFloat(prompt("How many hours did you work?"));

var facebookRate = parseFloat(prompt("How much does Facebook pay per hour?"));
var facebookHours = parseFloat(prompt("How many hours did you work?"))
alert("You get paid $" + (googleHours * googleRate) + (amazonRate * amazonHours)+(facebookRate * facebookHours)).toFixed(2) + ". Good Work!";

var classHasRoom =confirm("Hey, is there room in Class ?");
var noScheduleConflict =confirm("Can you take class at 9 AM?");
alert("You can have class: " + (classHasRoom && noScheduleConflict));

var isOfferValid =confirm("Are we still running the promo code on items?");
var isPremiumMember =confirm("Does the customer have the Star Card? ");
var amountBought = parseFloat(prompt("How many items are they buying?"));

alert ("Customer qualifies for prom: " + (((isPremiumMember || amountBought  >= 2) && isOfferValid) && amountBought >= 1) + ".")
