# Events

Interactions create events, which trigger code.

## Event Handling

Three steps for an event to trigger code:

1. Select the element you want the script to respond to
2. Indicate which event this selected node will respond to
3. State the code you want to run when the event fires

## Event Binding

Three ways to bind an event to an element:

1. **HTML:** Early versions of HTML included attributes that could respond to events on the element they were added to; e.g. `<a onclick="hide()">`.
   - Bad practise because it is better to separate HTML & JS
2. **DOM Event Handlers:** Drawback to this method is you can only attach a single function to any event
   - Syntax: `element.onevent = functionName;` (parentheses omitted as we don't want the function to be called immediately - meaning we cannot pass arguments)
3. **DOM Level 2 Event Listeners:** Allows one event to trigger multiple functions

### Using parameters with handlers & listeners

- Since you can't pass parameters to functions named in handler and listeners, you need to use a workaround
- Therefore you can use an anonymous function wrapper and put the named function with a parameter in the body
- You cannot then use `removeEventListener()` on this lis

## Event Flow

- HTML elements are nested inside other elements. Therefore if you interact with an element, you will also be interacting with its parent elements.
  - E.g. you click a link. A `click` event is also triggered on any elements the link sits inside, e.g. a paragraph tag.
- An event flows in two directions; first captures, then bubbles (there is an in-between phase at the target element itself, called the **target** phase):
  1. **Event Capturing:** event starts at the least specific node, and flows inwards to the most specific.
  2. **Event Bubbling:** event starts at the most specific node, and flows outwards to the least specific.
     - You can cancel bubbling with `stopPropagation()`
- Browsers default to handling events in the bubbling phase, but the last parameter in the `addEventListener()` function is a boolean that can switch this to capturing

### Event Delegation

- Creating a lot of event listeners can slow down a page. The concept of event flow allows you to create fewer listeners, on parent elements
- Create an event listener, then use the event's `target` property to find which child the event occurred on
  - You also don't have to add event listeners along with new child elements, if more elements are added dynamically
  - This approach simplifies code, and more loosely couples the DOM and JS code
