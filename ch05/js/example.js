// ADD ITEMS TO START & END OF LIST
var list = document.getElementsByTagName("ul")[0];

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement("li");
var newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// ADD NEW ITEM TO START OF LIST
var newItemFirst = document.createElement("li");
var newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < listItems.length; i++) {
  listItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector("h2");
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + "<span>" + totalItems + "</span>";
heading.innerHTML = newHeading;
