# Content Panels

Components such as accordions, tabs, modals, carousels, and sliders allow you to showcase extra information within a limited space.

### A Note on Accessibility

Many of these components hide content until the user interacts with them. This impacts accessibility.

One option is to include a `no-js` class on the `html` tag, which styles the document appropriately for those that have turned JS off for accessibility reasons. This class is removed at the top of your `site-bundle.js` for those that do have it enabled.

## Modal

- The modal script uses the module pattern
- This means it includes both public (accessible by anything on your page) and private (used only internally to the modal component) code
  - Public: `open()`, `close()`, `center()`
  - Private: variables used to create the HTML
- This helps organise code, facilitates easy testing and reuse, and creates scope
- The script defines how to build the HTML, and returns the `modal` object itself. Simply including the script has no visible effect on the page
- This is the equivalent of adding the following to your page:
  ```javascript
  var modal = {
    center: function() {
      // code for center()
    },
    open: function() {
      // code for open()
    },
    close: function() {
      // code for close()
    }
  };
  ```

## Creating a jQuery Plugin

- These allow you to add new methods to jQuery without customising the library itself
- They have benefits over standard scripts:
  - You can perform the same task on any matched elements
  - You can chain methods
  - Namespace collisions are prevented
- Any function can be a plugin if it manipulates a jQuery selection and returns a jQuery selection

1. **Adding a Method:** plugins are written as methods that are added to the `.fn` object - `$.fn.accordion = function(speed) { // logic }`
2. **Returning the jQuery Selection:** keeps the whole chain in the form of jQuery objects - `$.fn.accordion = function(speed) { return this }`
3. **Protecting the Namespace:** everything lives in an IIFE - `(function($) { $.fn.accordion = function(speed) { // logic } })(jQuery);`
