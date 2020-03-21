(function() {
  var form = document.getElementById("newPwd");
  var password = document.getElementById("pwd");
  var submit = document.getElementById("submit");

  var submitted = false;

  submit.disabled = true;
  submit.className = "disabled";

  // On input: check whether or not to enable the submit button
  addEvent(password, "input", function(e) {
    var target = e.target || e.srcElement;
    submit.disabled = submitted || !target.value;
    // If form has been submitted or pwd has no value, set CSS to disabled
    submit.className = !target.value || submitted ? "disabled" : "enabled";
  });

  // On submit: disable the form so it cannot be submitted again
  addEvent(form, "submit", function(e) {
    // if already disabled or submitted
    if (submit.disabled || submitted) {
      e.preventDefault();
      return;
    }
    submit.disabled = true;
    submitted = true;
    submit.className = "disabled";

    // debug only
    e.preventDefault();
    alert("Password is " + password.value);
  });
})();
