(function() {
  var form, options, other, otherText, hide;
  form = document.getElementById("how-heard");
  options = form.elements.heard;
  other = document.getElementById("other");
  otherText = document.getElementById("other-text");
  // hide other text input on page load
  otherText.className = "hide";

  // add event listeners
  for (var i = [0]; i < options.length; i++) {
    addEvent(options[i], "click", radioChanged);
  }

  function radioChanged() {
    // if text box should be hidden, add class & reset text contents
    hide = other.checked ? "" : "hide";
    otherText.className = hide;
    if (hide) {
      otherText.value = "";
    }
  }
})();
