/**
 * Adds an event. Backwards compatible with IE5-8.
 * @param {Node} el - The element to attach an event to.
 * @param {string} event - The type of event being listened for.
 * @param {Function} callback - The function to run when the event is triggered.
 */
function addEvent(el, event, callback) {
  if ("addEventListener" in el) {
    // if addEventListener works, use it
    el.addEventListener(event, callback, false);
  } else {
    // otherwise make a callback method
    el["e" + event + callback] = callback;
    // add a second method to call previous function
    el[event + callback] = function() {
      el["e" + event + callback](window.event);
    };
    // attach event calls the second function, which then calls the first
    el.attachEvent("on" + event, el[event + callback]);
  }
}
