# Basic JavaScript Instructions

## Statements

## Comments

## Variables

- You can declare a variable: `var quantity;`
- You can assign a variable: `quantity = 3;`
- You can declare & assign multiple variables on one line: `var quantity = 3; var total = 14`

### Naming Variables

- The name can begin with a letter, \$, \_. It cannot begin with a number.
- The name can contain letters, numbers, \$, \_. It cannot contain - or ..
- The name cannot be a reserved word (words that are/might be used as a keyword e.g. `var`, `byte` etc.)

## Data Types

- Number
- String
  - Use an escape character `\` to include quotes in a String
- Boolean
- Undefined (variable has been declared, but no value has been assigned)
- Null (variable with no value - maybe had one in the past, but no longer does)
- Object (the only complex data type)

## Operators

- Assignment
- Arithmetic
- String (only one: concatenation `+`)
- Comparison
- Logical

---

## `innerText` vs. `textContent`

- `innerText` was nonstandard; `textContent` was standardised earlier
- `innerText` returns **visible** text, `textContent` returns **full** text
  - Therefore, `innerText` is less performant as it requires layout information
- `innerText` is defined only for `HTMLElement` objects, `textContent` is defined for all `Node` objects
