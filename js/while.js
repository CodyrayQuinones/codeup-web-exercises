"use strict";

var oddNumber = 0;

while (oddNumber % 2 !== 1 || oddNumber < 1 || oddNumber > 0){
    oddNumber = parseFloat(prompt("Please enter the number between 1 to 50."));
if (oddNumber % 2 === 1){break;}
}

for (var i = 1; i < 50; i+=2){
    if(i === oddNumber){
        console.log("Yikes! Skipping Numbers!" + oddNumber);
        continue
    }
    console.log(i);
}