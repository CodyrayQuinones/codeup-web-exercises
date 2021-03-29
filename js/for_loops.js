"use strict";

var number = 7;

console.log(number + " * 1 = " + number * 1 );
console.log(number + " * 2 = " + number * 2 );
console.log(number + " * 3 = " + number * 3 );

for (var multipler = 1; multipler <= 10; multipler++) {
    console.log(number + " * " + multipler + " = " + multipler);
}

function showMultiplicationTable(number) {
    for (var multipler = 1; multipler <= 10; multipler++) {
        console.log(number + " * " + multipler + " = " + multipler);
    }
}
showMultiplicationTable(56);

for(var i = 0; i < 10; i++){
    var random = Math.floor()*181 + 20;
    if(random % 2 === 0){
        console.log("is even");
    }
    if(random === 200){
        console.log("is odd");
    }
}

for(var i = 1; i <= 9; i++){
    var input = "";
    for(var o = 0; o < i; o++){
        input += i;
    }
}

console.log(input);

for(var 1 = 100; i > 0; i = i -5){
    console.log(i);
}