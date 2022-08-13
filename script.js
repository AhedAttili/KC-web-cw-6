alert("Hello, Welcome to my website wich well calculate your degree");

let degree = prompt("enter your degree here") 

console.log (degree)

if (degree >= 90)  {
    console.log("You’ve got EXCELLENT");
} else if (degree >= 80) {
    console.log("You’ve got VERY GOOD");
} else if (degree >= 70) {
    console.log("You’ve got GOOD");
} else if (degree >= 60) {
    console.log ("You’ve got OKAY");
} else if (degree >= 50) {
    console.log ("You’ve got BAD");
} else {
    console.log ("You FAILED");
};