# Functions, Methods & Objects

Fundamentally these are all tools to help us organise our code.

## What is a Function?

- Functions have name/value pairs: the name of a function, and the code block that will execute
- Anonymous functions don't have a name and will execute immediately as the interpreter meets them
- You can call a function before declaring it, because the interpreter runs through scripts before executing the statements

## Function Expressions

- If a function exists where an expression is expected (e.g. as an argument), it is treated as an expression anyway
- If you do `var calcArea() = function(width, height) { /* do something */ }`, this **will not** be evaluated ahead of time and therefore the function cannot be used until this statement is reached.

## Immediately Invoked Function Expressions (IFFE)

- These anonymous functions are invoked when the interpreter meets them. E.g. here, `area` will store the return value of the expression rather than the expression itself:
  - `var area = (function() { /* do something */ }());`
    - The outer brackets (grouping) ensure the interpreter treats this as an expression
    - The inner brackets (final) tell the interpreter to call immediately
- Commonly used to provide scope - variables declared inside this wrapper will not conflict with any sibling scripts that use the same variable names

## Scope

- Local variables with function-level scope cannot be accessed outside that function - it is created whn the function is called, and is removed when it is finished running
- Global variables are stored in memory for as long as the page is loaded. They also increase the risk of naming conflicts.
  - If you forget to declare using `var`, the variable will be created automatically at global scope (bad practise)

## Objects

- Objects group together variables and functions to create a model
- 'Variables' -> 'Properties'
- 'Functions' -> 'Methods'
- 'Dot notation' -> 'Member operator'

#### Literal notation

```javascript
var hotel = {
  name: "Quay",
  rooms: 40,
  booked: 25,

  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};
```

#### Constructor notation: singular

```javascript
var hotel = new Object();

hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};
```

#### Constructor notation: multiple

```javascript
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel("Quay", 40, 25);
```

- The final form acts as a template for creating similar objects
- When accessing a property e.g. with dot notation, if the property doesn't exist it will be created.
- You can delete a property using `delete [identifier].[property_name]`

## `this`

- For functions created at the top level, `this` refers to the `window` object
- Global variables become properties of `window`, so global functions can also access global variables as well as the other properties of `window`
- In a method, `this` refers to the containing instance
- If a named global function is assigned to an object's property for use as a method, the scope narrows to the containing instance

## Arrays

- Arrays are objects with key/value pairs - but their key is just a value's index

## Build-In Objects

### Browser Object model

Creates a model of the browser tab/window

- `window`
  - `document`
  - `history`
  - `location`
  - `navigator`
  - `screen`
- `window` is treated as the default object if none is specified, hence why you can just do `location.url` etc.

## Document Object Model

Creates a model of the current page, with each child item representing items on the page

## Global JS Objects

Do not form a single model, relate to different parts of the language

- `String`
- `Number`
- `Boolean`
- `Date`
- `Math`
- `Regex`
