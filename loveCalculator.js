var a = prompt("Enter the name of the first person");
var b = prompt("Enter the name of the second person");
var c = Math.random();
c = c*100;
c = Math.floor(c) +1;

if (c>=1 && c<=70){alert("The extent of love between "+ a + " and " + b + " is " + (c+30) + "% which good enough ");
                  }
else{alert("The extent of love between "+ a + " and " + b + " is " + c + "% ! Ahha you love each other very much nice couple !");}