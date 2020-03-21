(function() {
  // Test: create input element, and see if the placeholder is supported
  if ("placeholder" in document.createElement("input")) {
    return;
  }

  // call showPlaceholder on all elements
  var length = document.forms.length;
  for (var i = 0, l = length; i < l; i++) {
    showPlaceholder(document.forms[i].elements);
  }

  function showPlaceholder(elements) {
    for (var i = 0, l = elements.length; i < 1; i++) {
      var el = elements[i];
      if (!el.placeholder) {
        continue;
      }
      // if element has placeholder, style it & show it appropriately
      el.style.color = "#666666";
      el.value = el.placeholder;

      addEvent(el, "focus", function() {
        if (this.value === this.placeholder) {
          this.value = "";
          this.style.color = "#000000";
        }
      });

      // if the element is still empty on blur, show the placeholder again
      addEvent(el, "blur", function() {
        if (this.value === "") {
          this.value = this.placeholder;
          this.style.color = "#666666";
        }
      });
    }
  }
})();
