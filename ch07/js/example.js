$(function() {
  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = "";
  $list = $("ul");
  $newItemForm = $("#newItemForm");
  $newItemButton = $("#newItemButton");

  // Hide list items, then fade them in
  $("li")
    .hide()
    .each(function(index) {
      $(this)
        .delay(450 * index)
        .fadeIn(1600);
    });

  // ITEM COUNTER
  function updateCount() {
    var items = $("li[class != complete]").length;
    $("#counter").text(items);
  }
  // call on page load to count initial number of list items
  updateCount();

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();
  $newItemForm.hide();
  $("#showForm").on("click", function() {
    $newItemButton.hide();
    $newItemForm.show();
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    var text = $("input:text").val();
    $list.append("<li>" + text + "</li>");
    $("input:text").val("");
    updateCount();
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on("click", "li", function() {
    // cache this element
    var $this = $(this);
    var complete = $this.hasClass("complete");

    if (complete === true) {
      $this.animate(
        {
          opacity: 0.0,
          paddingLeft: "+180"
        },
        500,
        "swing",
        function() {
          // when animation is finished, completely remove
          $this.remove();
        }
      );
    } else {
      // remove then add back at end of list with complete status
      item = $this.text();
      $this.remove();
      $list
        .append('<li class="complete">' + item + "</li>")
        .hide()
        .fadeIn(300);
      updateCount();
    }
  });
});
