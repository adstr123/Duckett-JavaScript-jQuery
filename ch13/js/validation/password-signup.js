(function() {
  var password = document.getElementById("password");
  var passwordConfirm = document.getElementById("conf-password");

  function setErrorHighlighter(e) {
    // fail validation if length < 8
    var target = e.target || e.srcElement;
    if (target.value.length < 8) {
      target.className = "fail";
    } else {
      target.className = "pass";
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;
    if (target.className === "fail") {
      target.className = "";
    }
  }

  function passwordsMatch(e) {
    var target = e.target || e.srcElement;
    // If value matches pwd and it is longer than 8 characters, pass validation
    if (password.value === target.value && target.value.length >= 8) {
      target.className = "pass";
    } else {
      target.className = "fail";
    }
  }

  addEvent(password, "focus", removeErrorHighlighter);
  addEvent(password, "blur", setErrorHighlighter);
  addEvent(passwordConfirm, "focus", removeErrorHighlighter);
  addEvent(passwordConfirm, "blur", passwordsMatch);
})();
