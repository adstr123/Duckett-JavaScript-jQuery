(function() {
  var bio = document.getElementById("bio");
  var bioCount = document.getElementById("bio-count");

  // update character count on focus or input
  addEvent(bio, "focus", updateCounter);
  addEvent(bio, "input", updateCounter);

  // hide counter when cursor leaves input, if bio is not too lon
  addEvent(bio, "blur", function() {
    if (bio.value.length <= 140) {
      bioCount.className = "hide";
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;
    var count = 140 - target.value.length;
    // update counter class depending on number of remaining characters
    if (count < 0) {
      bioCount.className = "error";
    } else if (count <= 15) {
      bioCount.className = "warn";
    } else {
      bioCount.className = "good";
    }
    var charMsg = "<b>" + count + "</b>" + " characters";
    bioCount.innerHTML = charMsg;
  }
})();
