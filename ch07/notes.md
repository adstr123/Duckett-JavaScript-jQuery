# jQuery

> Rose to prominence because it offers a simple way to achieve many common tasks, quickly and consistently across browsers, without any fallback code.

- Selecting elements is simpler than using built-in queries
- Can update the DOM, animate elements etc.; usually all in one line, using method chaining
- Handles events with no IE5-8 fallbacks
- Methods affect all selected elements without the need for loops

## Versions

- **Version 1.0 (deprecated):** First stable release.
- **Version 2.0 (deprecated):** Dropped IE 6–8 support for performance improvements and reduction in filesize
- **Version 3.0**: Promises/A+ support for Deferreds, `$.ajax` and `$.when`, `.data()` HTML5-compatible

As of **version 3.0**, versions **1.X** and **2.X** have been upgraded to **Version 3.0 Compat**. This still supports older browsers but brings it in line with **3.0**.

## Selectors

In addition to offering easy-to-use CSS3 selectors, jQuery also offers a number of extension selectors:

- **Basic Filters**: `:first`, `:last`, `:even`, `:odd`, `:eq(index)`, `:gt(index)`, `:lt(index)`, `:header`, `:animated`
- **Content Filters**: `:parent`, `:has(selector)`
- **Visibility Filters**: `:hidden`, `:visible`
- **Attribute Filters**: `[attribute != 'value']`
- **Form:** `:input`, `:text`, `:password`, `:radio`, `:checkbox`, `:submit`, `:image`, `:reset`, `:button`, `:file`, `:selected`

## Method Reference

jQuery methods that **set** information do it for all matches. Methods that **get** information return it for only the first match.

> FMO = first match only, i.e. operations on the matched elements will need to be performed in a looping construct such as .each().

### Content Filters

| Method Name      | Action                                                   | Vanilla JS Equivalent                                  |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| **Content**      |                                                          |                                                        |
| `.html()`        | Get or set inner content (can contain HTML)              | `.innerHTML`                                           |
| `.text()`        | Get or set content (text only)                           | `.textContent`                                         |
| `.replaceWith()` | Replace all content & returns replaced elements          | `.outerHTML`                                           |
| `.remove()`      | Remove & delete node                                     | `.parentNode.removeChild(el)`                          |
| **Elements**     |                                                          |                                                        |
| `.before()`      | Insert content before                                    | `.insertAdjacentElement('beforebegin', el)`            |
| `.after()`       | Insert content after                                     | `.insertAdjacentElement('afterend', el)`               |
| `.prepend()`     | Insert content as first child                            | `.insertBefore(el, parent.firstChild)`                 |
| `.append()`      | Insert content as last child                             | `.appendChild(el)`                                     |
| `.clone()`       | Deep copy (can include events)                           | `.cloneNode(true)` (cannot include event)              |
| `.unwrap()`      | Remove parent from DOM, leaving child in place           |                                                        |
| `.detach()`      | Remove node, but retain associated jQuery data           |                                                        |
| `.empty()`       | Remove all child nodes                                   | `.removeChild` (loop over all children)                |
| `.add()`         | Union of a new jQuery object and an existing one         |                                                        |
| **Attributes**   |                                                          |                                                        |
| `.attr()`        | Get or set named attribute (FMO)                         | `.getAttribute()`, `.setAttribute()`                   |
| `.removeAttr()`  | Remove named attribute                                   | `.removeAttribute()`                                   |
| `.addClass()`    | Add a class                                              | `.classList.add()`                                     |
| `.removeClass()` | Remove a class                                           | `.classList.remove()`                                  |
| `.css()`         | Get or set named style property (FMO)                    | `.getComputedStyle(el)[ruleName]`, `el.style.ruleName` |
| **Form**         |                                                          |                                                        |
| `.val()`         | Get the current form input value                         | `.value`                                               |
| `.isNumeric()`   | Determines whether argument is numeric (various formats) |                                                        |

### Finding Elements

| Method Name             | Action                                                                   | Vanilla JS Equivalent                                                                                 |
| ----------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| **General**             |                                                                          |                                                                                                       |
| `.find()`               | Get descendents matching a selector param                                | `.querySelectorAll()`                                                                                 |
| `.closest()`            | Get nearest ancestor matching a selector param                           | `.closest()`                                                                                          |
| `.parent()`             | Get direct parent                                                        | `.parentNode`                                                                                         |
| `.parents()`            | Get parents all the way up the DOM tree                                  |                                                                                                       |
| `.children()`           | Get direct descendents                                                   | `.children`                                                                                           |
| `.siblings()`           | Get siblings                                                             | `Array.prototype.filter.call(el.parentNode.children, child => child !== el;);`                        |
| `.next()`               | Get immediately following sibling                                        | `.nextElementSibling`                                                                                 |
| `.nextAll()`            | Get all following siblings                                               |                                                                                                       |
| `.prev()`               | Get immediately preceding sibling                                        | `.previousElementSibling`                                                                             |
| `.prevAll()`            | Get all preceding siblings                                               |                                                                                                       |
| `.each()`               | Perform operations in a loop on all matches                              | `.forEach()`                                                                                          |
| **Filter/Test**         |                                                                          |                                                                                                       |
| `.filter(filterFn)`     | Reduce matches to those that satisfy new criteria                        | `Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);`                         |
| `.not()`                | Reduce matches to those that don't satisfy new criteria                  | `Array.prototype.filter.call(document.querySelectorAll(selector), notFn);`                            |
| `.has()`                | Reduce matches to those that have a descendent matching a selector param | `Array.prototype.filter.call(document.querySelectorAll(selector), el => el.querySelector(selector2))` |
| `.is()`                 | Check direct match against criteria                                      | `===`                                                                                                 |
| `$.contains(el, child)` | Check whether a node is a descendent of another node                     | `el !== child && el.contains(child);`                                                                 |
| **Order in Selection**  |                                                                          |                                                                                                       |
| `.eq()`                 | Reduce matches to the one at the specified index                         | `.find()`                                                                                             |

### Dimension/Position

| Method Name            | Action                                                                              | Vanilla JS Equivalent                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Dimension**          |                                                                                     |                                                                                                                                |
| `.height()`            | Get or set the computed element height (FMO)                                        | `parseFloat(getComputedStyle(el, null).height.replace("px", ""))`, `.style.height`                                             |
| `.width()`             | Get or set the computed element width (FMO)                                         | `parseFloat(getComputedStyle(el, null).width.replace("px", ""))`, `.style.width`                                               |
| `.innerHeight()`       | Get or set the computed element height inc. padding (FMO)                           | `.clientHeight`                                                                                                                |
| `.innerWidth()`        | Get or set the computed element width inc. padding (FMO)                            | `.clientWidth`                                                                                                                 |
| `.outerHeight()`       | Get or set the computed element height inc. padding & border; optional margin (FMO) | `.offsetHeight` (no margin)                                                                                                    |
| `.outerWidth()`        | Get or set the computed element width inc. padding & border; optional margin (FMO)  | `.offsetWidth` (no margin)                                                                                                     |
| `$(document).height()` | Get height of HTML document                                                         | `document.body.clientHeight`                                                                                                   |
| `(document).width()`   | Get width of HTML document                                                          | `document.body.clientWidth`                                                                                                    |
| `(window).height()`    | Get height of browser viewport                                                      | `window.innerHeight`                                                                                                           |
| `(window).width()`     | Get width of browser viewport                                                       | `window.innerWidth`                                                                                                            |
| **Position**           |                                                                                     |                                                                                                                                |
| `.offset()`            | Get coordinates relative to the document (FMO)                                      | X: `el.getBoundingClientRect().left + document.body.scrollLeft`, Y: `el.getBoundingClientRect().top + document.body.scrollTop` |
| `.position()`          | Get coordinates relative to the offset parent (FMO)                                 | X: `.offsetLeft`, Y: `.offsetTop`                                                                                              |
| `.scrollLeft()`        | Get horizontal scroll position (FMO)                                                | `.scrollLeft`                                                                                                                  |
| `.scrollTop()`         | Get vertical scroll position (FMO)                                                  | `.scrollTop`                                                                                                                   |

### Effects & Animation

| Method Name      | Action                                                | Vanilla JS Equivalent                                                              |
| ---------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Basic**        |                                                       |                                                                                    |
| `.show()`        | Display                                               | `.style.display = '';`                                                             |
| `.hide()`        | Hide                                                  | `.style.display = 'none';`                                                         |
| `.toggle()`      | Toggle display/hide                                   | `el.style.display === '' ? el.style.display === 'none' : el.style.display === '';` |
| **Fading**       |                                                       |                                                                                    |
| `.fadeIn()`      | Fade display                                          | Add a class that has CSS opacity 1 & transition properties                         |
| `.fadeOut()`     | Fade hide                                             | Remove a class that has CSS opacity & transition properties                        |
| `.fadeTo()`      | Fade to specific opacity                              | Add a class that has CSS specific opacity & transition properties                  |
| `.fadeToggle()`  | Toggle fade display/fade hide                         | Toggle the above                                                                   |
| **Sliding**      |                                                       |                                                                                    |
| `.slideDown()`   | Display with slide animation                          |                                                                                    |
| `.slideUp()`     | Hide with slide animation                             |                                                                                    |
| `.slideToggle()` | Toggle display/hide with slide animation              |                                                                                    |
| **Custom**       |                                                       |                                                                                    |
| `.delay()`       | Set timer to delay execution of subsequent animations |                                                                                    |
| `.stop()`        | Stop current animation                                |                                                                                    |
| `.animate()`     | Perform custom animation of a set of CSS properties   |                                                                                    |

### Events

| Method Name          | Action                                    | Vanilla JS Equivalent                                     |
| -------------------- | ----------------------------------------- | --------------------------------------------------------- |
| **Document/File**    |                                           |                                                           |
| `.ready()`           | Execute callback when DOM is fully loaded | `document.addEventListener('DOMContentLoaded', callback)` |
| **User Interaction** |                                           |                                                           |
| `.on()`              | Attach event handler for 1+ events        | `el.addEventListener()`                                   |
