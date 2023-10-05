function whoisPaying(){

var names = ["Satyendra" , "Suman" , "Swati" , "Alka" , "Indal" , "Neelu"];
var n = Math.random(); // Math.random ranges from 0 inclusive to less than 1
 
n = Math.floor(n*6);

var person = names[n];
    console.log(person + " is going to pay all the bill of the food")
}
whoisPaying();
