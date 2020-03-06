# Decisions & Loops

_Evaluations_ lead to _decisions_, often performed many times over in _loops_

## Switch statements

```javascript
var level = "Two";
switch (level) {
  case "One":
    title = "Level 1";
    break;

  case "Two":
    title = "Level 2";
    break;

  case "Three":
    title = "Level 3";
    break;

  case "Four":
    title = "Level 4";
    break;

  default:
    title = "Test";
    break;
}
```

Each `case` block is followed by a `break` to save the interpreter evaluating the other cases, improving performance

## Short circuit values

Because expressions are evaluated left to right, it is best to put options requiring most processing power last in case another earlier option already evaluated `true` and it never has to run
