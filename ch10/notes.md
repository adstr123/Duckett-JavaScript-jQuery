# Error Handling & Debugging

## Execution Order & The Stack

```javascript
function greetUser() {
  return "Hello " + getName();
}

function getName() {
  var name = "Molly";
  return name;
}

var greeting = greetUser();
alert(greeting);
```

1.  - Create `greeting` & call `greetUser()` to get value
2.  - Waiting...
    - `greetUser()` returns `Hello` and the result of `getName()`
3.  - Waiting...
    - Waiting...
    - `getName()` returns `Molly` to `greetUser()`
4.  - Waiting...
    - `greetUser()` returns `Hello Molly` to the greeting variable
5.  - `greeting` is assigned the value `Hello Molly`.

## Execution Context

Each time the interpreter detects a new execution context, there are to phases of activity:

1. **Prepare:** new scope created, variables/functions/arguments created, value of `this` determined
2. **Execute:** assign values to variables, reference functions and run their code, execute statements

### Hoisting

These two phases are what enable **hoisting** - the mechanic by which variables and functions are able to be assigned/called before they are declared.

- In **prepare**, variables and functions are created and _hoisted_ to the top of their respective execution context in the `variables` object
  - This is why hoisting only counts for function declarations, not expressions. **Prepare** creates the variable used for a function expression, but the expression itself (where the function is defined) is not evaluated until **execute**.
- E.g. this code produces no errors, as the function and statement share an execution context:
  ```javascript
  var greeting = greetingUser();
  function greetUser() {
    // Create greeting
  }
  ```
- E.g. this code produces errors because `greetUser()` is created within thr `getName()` context:
  ```javascript
  var greeting = greetUser();
  function getName() {
    function greetUser() {
      // Create greeting
    }
    // Return name with greeting
  }
  ```

### Scope

- Each time an outer function calls an inner function, a new `variables` is created - but the outer function's `variables` remains the same
- If a variable is not found in the current context's `variables` object, the interpreter can look in the parent context's `variables`
- The further up the stack the interpreter has to look, the more impact it has on performance - ideally variables should be created in the context in which they are used

## Error Objects

| Property Name | Description                 |
| ------------- | --------------------------- |
| `name`        | Type of execution           |
| `message`     | Error description           |
| `fileNumber`  | Name of the JavaScript file |
| `lineNumber`  | Line number of error        |

### Types of Error Object

| Object Name      | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| `Error`          | Generic - other error objects are based on this                             |
| `SyntaxError`    | JS syntax has not been followed                                             |
| `ReferenceError` | Tried to reference variable that has not been declared in this scope        |
| `TypeError`      | Unexpected data type that cannot be coerced                                 |
| `RangeError`     | Numbers not in acceptable range                                             |
| `URIError`       | URI function not used correctly (e.g. `/`, `&` etc. characters not escaped) |
| `EvalError`      | `eval()` not used correctly                                                 |

## `console` API

| Method Name                    | Description                                                           |
| ------------------------------ | --------------------------------------------------------------------- |
| `.info(message)`               | Print general information                                             |
| `.warn(message)`               | Print warnings                                                        |
| `.error(message)`              | Print highlighted errors                                              |
| `.group(label)`, `.groupEnd()` | Group console outputs together in a collapsible list                  |
| `.table(data)`                 | Print tabular data (array or object)                                  |
| `.dir(object)`                 | Print interactive list of the properties of the specified object      |
| `.count(label)`                | Print the number of times that this call to `count()` has been called |
| `.assert(condition, message)`  | Print if a condition evaluates to false                               |
| `.time(label), .timeEnd()`     | Print how long an operation between start & end methods takes         |
| `.clear()`                     | Clear the console                                                     |

## Throwing Errors

- You can throw your own error before the interpreter creates one with `throw new Error('message')`
- This can be better than letting data cause errors further into the script
- You can also take the opportunity to print a more useful specific error message
  - E.g. during user input when a number is expected, you can throw an error if a string is detected instead which a specific error describing this precise issue
