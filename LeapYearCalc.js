var YEAR = prompt("Enter the year you want to check for the Leap year");
var r1 = YEAR % 4;
var r2 = YEAR % 100;
var r3 = YEAR % 400;
if(r1 !==0){
    console.log("Year " + YEAR +  "is NOT the leap year") ;
}
else if(r1===0 && r2 !==0){
    console.log ("Year " + YEAR + "is the leap year");
}
else if (r1===0 && r2 ===0 && r3===0){
     console.log("Year "+ YEAR + " is a Leap year ");
}
else if (r1===0 && r2 ===0 && r3 !==0){
     console.log("Year " + YEAR + " is a NOT Leap year ");
}