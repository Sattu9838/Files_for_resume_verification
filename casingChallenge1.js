var name = prompt("What is your name ?");
var name1 = name.slice(0,1);
 name1 = name1.toUpperCase();                 // to do the upper acsing of first character entered through prompt tab and show aalert with Hello Name
name2 = name.slice(1, name.length);
name2 = name2.toLowerCase();
alert("Hello " + name1 + name2);