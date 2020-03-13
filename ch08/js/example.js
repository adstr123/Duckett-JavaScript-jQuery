//$(function() {
// When the DOM is ready

var times;
/*
  $.ajax({
    beforeSend: function(xhr) {
      // Before requesting data, try to explicitly set MIME type to prevent errors
      // Servers use MIME types, not file extensions, to determine the correct type
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });

  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable() {
    $.getJSON("data/example.json")
      .done(function(data) {
        times = data;
      })
      .fail(function() {
        $("#event").html(
          "Sorry! We could not load the timetable at the moment"
        );
      });
  }

  loadTimetable();
  */
function loadTimetable(data) {
  times = data;
}

// CLICK ON THE EVENT TO LOAD A TIMETABLE
$("#content").on("click", "#event a", function(e) {
  // User has clicked on place, prevent link default
  e.preventDefault();
  var loc = this.id.toUpperCase();

  var newContent = "";
  // loop through sessions to build up timetable
  for (var i = 0; i < times[loc].length; i++) {
    newContent += '<li><span class="time">' + times[loc][i].time + "<span>";
    newContent += '<a href="descriptions.html#';
    newContent += times[loc][i].title.replace(/ /g, "-") + '">';
    newContent += times[loc][i].title + "<a></li>";
  }

  // Display time
  $("#sessions").html("<ul>" + newContent + "</ul>");

  // Update selected link
  $("#event a.current").removeClass("current");
  $(this).addClass("current");

  // Clear third column
  $("#details").text("");
});

// CLICK ON A SESSION TO LOAD THE DESCRIPTION
$("#content").on("click", "#sessions li a", function(e) {
  // User has clicked session, prevent link default
  e.preventDefault();
  var fragment = this.href;

  // Add space after # to load info
  fragment = fragment.replace("#", " #");
  $("#details").load(fragment);

  // Update selected
  $("sessions a.current").removeClass("current");
  $(this).addClass("current");
});

// CLICK ON PRIMARY NAVIGATION
$("nav a").on("click", function(e) {
  // User has clicked nav, prevent link default
  e.preventDefault();
  var url = this.href;

  $("#container").remove();
  $("#content")
    .load(url + " #container")
    .hide()
    .fadeIn("slow");
});
//});
