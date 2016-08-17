var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good evening!";
} else if (hourNow > 12) {
    greeting = "Good afternoon!";
} else {
    greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>");