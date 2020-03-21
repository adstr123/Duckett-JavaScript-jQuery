(function() {
  var form = document.getElementById("login");

  addEvent(form, "submit", function(e) {
    // stop the form being sent
    e.preventDefault();
    var elements = this.elements;
    // select user input
    var username = elements.username.value;
    // display a welcome message based on input
    var msg = "Welcome " + username;
    document.getElementById("main").textContent = msg;
  });
})();
