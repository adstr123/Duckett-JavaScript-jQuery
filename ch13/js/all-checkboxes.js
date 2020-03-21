(function() {
  var form = document.getElementById("interests");
  var elements = form.elements;
  var options = elements.genre; // Array of all checkboxes besides 'all'
  var all = document.getElementById("all"); // 'All' checkbox only

  function updateAll() {
    // update options to reflect 'all' status
    for (var i = 0; i < options.length; i++) {
      options[i].checked = all.checked;
    }
  }
  addEvent(all, "change", updateAll);

  function clearAllOption(e) {
    var target = e.target || e.srcElement;
    // if an option is unchecked, uncheck 'all'
    if (!target.checked) {
      all.checked = false;
    }
  }
  // add event listener to all options
  for (var i = 0; i < options.length; i++) {
    addEvent(options[i], "change", clearAllOption);
  }
})();
