var table = 3;
var operator = "multiplication";
var i = 1;
var msg = "";

if (operator === "addition") {
  while (i < 11) {
    msg += i + " + " + table + " = " + (i + table) + "<br />";
    i++;
  }
} else {
  while (i < 11) {
    msg += i + " x " + table + " = " + i * table + "<br />";
    i++;
  }
}

var el = document.getElementById("blackboard");
el.innerHTML = msg;
