(function() {
  var people = [
    {
      name: "Casey",
      rate: 60
    },
    {
      name: "Camille",
      rate: 80
    },
    {
      name: "Gordon",
      rate: 75
    },
    {
      name: "Nigel",
      rate: 120
    }
  ];
  var rows = [],
    $min = $("#value-min"),
    $max = $("#value-max"),
    $table = $("#rates");

  function makeRows() {
    // for each person object in people array...
    people.forEach(function(person) {
      // create a table row for them with their name & rate
      var $row = $("<tr></tr>");
      $row.append($("<td></td>").text(person.name));
      $row.append($("<td></td>").text(person.rate));
      // add object to cross-reference between people and HTML table row
      rows.push({
        person: person,
        $element: $row
      });
    });
  }

  function appendRows() {
    // for each object in the rows array, add the HTML for the table row
    var $tbody = $("<tbody></tbody>");
    rows.forEach(function(row) {
      $tbody.append(row.$element);
    });
    $table.append($tbody);
  }

  function update(min, max) {
    // update table content
    rows.forEach(function(row) {
      // for each row in the rows array...
      if (row.person.rate >= min && row.person.rate <= max) {
        // ... if the person rate is within bounds, show the corresponding HTML table row on the page
        row.$element.show();
      } else {
        // else hide the HTML table row on the page
        row.$element.hide();
      }
    });
  }

  function init() {
    // set up the slide control using Leon Gerson's noUiSlider plugin
    $("#slider")
      .noUiSlider({
        range: [0, 150],
        start: [65, 90],
        handles: 2,
        margin: 20,
        connect: true,
        serialization: { to: [$min, $max], resolution: 1 }
      })
      .change(function() {
        update($min.val(), $max.val());
      });
    makeRows();
    appendRows();
    update($min.val(), $max.val());
  }

  // call init() when DOM is ready
  $(init);
})();
