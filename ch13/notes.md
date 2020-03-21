# Form Enhancement & Validation

You can enhance forms to make them easier to use and collect better information. You can validate them with JS to ensure the user provides the right information, in the right format; and its faster to validate client-side.

In this chapter a large, custom form is built with plenty of enhancement and validation, with vanilla JS and jQuery, with lots of backwards-compatibility.

## Form Components

### Form Element Properties & Methods

Form DOM nodes have a set of unique properties and methods that are a little different from other nodes.

| Property Name | Description                                                                             |
| ------------- | --------------------------------------------------------------------------------------- |
| `.action`     | The URL the form will be submitted to                                                   |
| `.method`     | GET or POST                                                                             |
| `.name`       | Name of the form (more common to select by `id`)                                        |
| `.elements`   | Collection of interactive elements for this form. Accessed via index or by their `name` |

| Method Name | Description                                  |
| ----------- | -------------------------------------------- |
| `.submit()` | Same as clicking the submit button           |
| `.reset()`  | Reset form to the values it had at page load |

| Event Name | Description                  |
| ---------- | ---------------------------- |
| `submit`   | Fires when form is submitted |
| `reset`    | Fires when form is reset     |

### Form Control Element Properties & Methods

Each different type of control uses a combination of the properties/methods/events below.

| Property Name     | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `.value`          | For `text` type, this is the inputted text; else it is the value of `value` |
| `.type`           | Type of `<input>` element                                                   |
| `.name`           | Get or set the name of the element                                          |
| `.defaultValue`   | Initial value of the `text` or `textarea` on page load                      |
| `.form`           | The form to which this element belongs                                      |
| `.disabled`       | Disables the `<input>`                                                      |
| `.checked`        | Indicates whether a `checkbox` or `radio` is checked                        |
| `.defaultChecked` | Initial value of `checked` for a `checkbox` or `radio` on page load         |
| `.selected`       | Indicates whether an `<option>` from a `<select>` box has been selected     |

| Method Name | Description                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| `.focus()`  | Gives an element focus                                                                                          |
| `.blur()`   | Removes focus from an element                                                                                   |
| `.select()` | Selects & highlights text content of an element                                                                 |
| `.click()`  | Trigger events: `click` on `button`, `checkbox`, `file`; `submit` on `submit` button; `reset` on `reset` button |

| Event Name                     | Triggers when...                                      |
| ------------------------------ | ----------------------------------------------------- |
| `blur`                         | User leaves a field                                   |
| `focus`                        | User enters a field                                   |
| `click`                        | User clicks on an element                             |
| `change`                       | Value of a form element changes                       |
| `input`                        | Value of an `<input>` or `<textarea>` element changes |
| `keydown`, `keyup`, `keypress` | User interacts with a keyboard                        |

### HTML5 Form Elements

HTML5 added elements and attributes to perform tasks that prevously were performed by JS.

| Input Type                                  | Description                                                   |
| ------------------------------------------- | ------------------------------------------------------------- |
| `search`                                    | Functionally identical to `text`, browser may add styles      |
| `email`, `url`, `telephone`                 | Look like `text`, browser performs relevant validation        |
| `number`                                    | Adds spinbox to increment/decrement value. Numeric validation |
| `range`                                     | Specify a number using a slider                               |
| `color`                                     | Choose a colour. Value returned is a hex color value          |
| `date`, `month`, `week`, `time`, `datetime` | Choose a date on a calendar                                   |

| Attribute Name | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `autofocus`    | Gives focus to this element on page load                                    |
| `placeholder`  | Text shown before user input, as a hint                                     |
| `required`     | Indicates to validation that this field must be completed before submission |
| `min`          | Minimum number                                                              |
| `max`          | Maximum number                                                              |
| `step`         | Intervals by which a number should increment/decrement                      |
| `autocomplete` | Show list of past entries (default: on)                                     |
| `pattern`      | Specify regex to validate input                                             |
| `novalidate`   | Disable built-in HTML5 validation                                           |

## Concepts

### Modifying Submission using the `submit` event

- It may be useful to include forms for complex user input, without actually submitting it for server-side processing
- In a `submit` event handler, use `preventDefault()` to prevent it being submitted
- Then, get data with `elements.[input-name].value` and manipulate as required
- > `/submit-event.html`, `/js/submit-event.js`

### Making Passwords Visible

- We can dynamically change the `type` of an input so it has different properties
- E.g. change the `type` from `password` to `text` for a user to see the password they have entered
  - This causes an error in IE8, so it is placed in a `try... catch`
- > `/input-type.html`, `/js/input-type.js`

### Disabling & Enabling Submit Buttons Depending on Input

- It can be useful to restrict submission until specific inputs have been entered
- You can also use this technique to prevent multiple/duplicate submissions
- E.g. this example:
  - disables the button on page load
  - enables it when `change` is detected on the `password` input
  - disables it again on `submit`
- > `/disable-submit.html`, `/js/disable-submit.js`

### Checkboxes with "Select All" Option

- You can dynamically manipulate the status of elements like type `checkbox`
- E.g. in this example:
  - When the value of the `all` checkbox triggers a `change` event, all other checkboxes are looped through and their `checked` status is updated
  - When the value of any checkbox besides 'all' triggers a `change` event, 'all' automatically has its `checked` status set to `false`
- > `/all-checkboxes.html`, `/js/all-checkboxes.js`

### Radio Buttons with "Other" Text Input

- You can dynamically update the status of non-form elements based on the status of elements like type `radio`
- E.g. in this example:
  - When a `radio` type input is clicked, check if it is the 'other' option
  - If so, show a text box for further user input
  - If not, ensure the text box is hidden
- > `/show-option.html`, `/js/show-option.js`

### Polyfill - Placeholder Fallback

- Check if a browser supports `placeholder` functionality
- If not, loop through each `<form>` element and get the `placeholder` attribute value
- Change the text colour to grey and set the value of the element to it
- When the element fires a `focus` event, clear the value
- When the element fires a `blur` event, check if it is empty and add the placeholder back if so
- > `/js/placeholder-polyfill.js`

### Select Boxes

`<select>` has yet further unique properties and methods, plus its own `<option>` sub-element:

| `<select>` Property Name | Description                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `.options`               | A collection of corresponding `<option>` elements                                                                      |
| `.selectedIndex`         | Index of the currently selected `<option>`                                                                             |
| `.length`                | Number of options                                                                                                      |
| `.multiple`              | Indicates whether uses are allowed to select multiple options (most browsers will show a scrolling list box if `true`) |
| `.selectedOptions`       | A collection of corresponding `<option>` elements that are currently selected                                          |

| `<select>` Method Name | Description                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `.add(option, before)` | Adds an `<option>` to the list; `option`: option to add; `before`: position to insert before (default: end of list) |
| `.remove(index)`       | Removes an `<option>` from the list                                                                                 |

| `<option>` Property Name | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `disabled`               | If set, this is not selectable and won't receive any event |
| `label`                  | Indicates its meaning                                      |
| `selected`               | Indicates it is selected on page load                      |

> `/populate-selectbox.html`, `/js/populate-selectbox.js`

### Textarea with Character Count

- In this example:
  - When the cursor is in the `textarea` (`focus` event), detect typing with `input` event
  - Show a `<span>` displaying a dynamically updated character count as the user types
  - Hide the message on `blur` event
- > `/textarea-counter.html`, `/js/textarea-counter.js`

---

## Example

- > `/validation.html`

### Backwards-Compatible Event Listener Helper Function

- Forms use a lot of event handlers, and IE5-8 used a non-standard event model.
- Instead of including the entire jQuery library to handle cross-browser compatibility for event listeners, you can roll your own solution
- We can write fallback code in a helper function, then use it across our scripts
- > `/js/utilities.js`

#### Explanation

- If the browser supports `addEventListener()`, that will be used. Otherwise, the IE fallback will be used:
  - Uses IE's `attachEvent()`
  - Accounts for the fact that in IE5-8, `event` is not automatically passed to `callback` and is therefore not available to `this`
  - Allows passing of parameters by wrapping in an anonymous function
- The function actually adds new methods to the DOM nodes its used on
- It utilises the technique of creating a method name using a variable, with square brackets `[]`

### Generic Checks

First, the code loops through every form element and performs two generic checks which work on all elements

1. Does the element have `required` attribute?
2. Does the value match its `type` attribute?

#### Required Form Elements

- `isRequired()` checks whether `required` exists on the element
- `isEmpty()` checks if the element has a value
- `setErrorMessage()` adds an error message if it fails
- `valid` boolean is returned

#### Validating Data Types

Validation is done with JS to ensure backwards compatibility, despite HTML5 `type` attributes facilitating this without JS.

- First, checks if the element has a value. If nothing has been entered, type cannot be verified
- Checks what type of data the element should hold
- Matches the contents of the element to that detected type through attempting to match a key of the `validateType` object
  - **Keys:** input types (email, number, date)
  - **Values:** functions tailored to validate the corresponding type v ia regex

### Individual Element Checks

After generic checks are complete, the script uses the `form/elements` collection to do individual checks that only apply to certain elements

- Do passwords match?
- Is the bio in the `textarea` under 140 characters?
- If the user is <13 years old, is the parental consent checkbox `checked`?

#### Custom Validation

Each element that requires custom validation has a named function:

- **`validateBio()`:** if content length is <= 140 characters, set `valid` to true; if `valid` is false, call `setErrorMessage()`
- **`validatePassword()`:** if content length is >= 8 characters, set `valid` to true; if `valid` is false, call `setErrorMessage()`
- **`validateParentsConsent():`** see **Enhancements** section

#### Dealing with Errors

- Errors in validation are tracked in the `valid` object. A property is added to it for each element
  - **Key:** element `id`
  - **Value:** boolean
- If an error is found:
  1. The corresponding `valid` property value is updated to `false`
  2. `setErrorMessage()` saves its corresponding error message as a `data` attribute on the element itself
- Finally, `showErrorMessage()` is called to display the error message in a `<span>` after the form control.
- On submission, the properties of `valid` are iterated upon and if 1+ are `false`, `isFormValid` variable is also set to `false` and the script prevents submission
  - All `valid` properties must be checked so the user is made aware of all errors simultaneously; flagging one at a time would be poor UX
  - Error messages are checked again on each submission so that they can be removed if necessary; e.g. if a user tried to submit a form with an error and an error message was shown, but they have resolved that particular error when they attempt a resubmission, that error message must be hidden.

---

### Enhancements

#### Parental Consent/Age Confirmation

- Uses jQuery UI date picker to show a consistent calendar input across browsers
- Checks whether the parental consent checkbox should be shown when date input fires `blur` event
- > `/js/birthday.js`

#### Password Strength Feedback

- Changes `class` depending on user input, each offering different types of feedback regarding:
  - password length
  - password & password confirmation match
- > `/js/password-signup.js`
