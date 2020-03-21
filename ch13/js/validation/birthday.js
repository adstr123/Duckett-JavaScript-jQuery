(function() {
  var $birth = $("#birthday"); // D-O-B input
  var $parentsConsent = $("#parents-consent");
  var $consentContainer = $("#consent-container");

  // Create the date picker using jQuery UI
  $birth
    .prop("type", "text")
    .data("type", "date")
    .datepicker({
      dateFormat: "yy-mm-dd"
    });

  $birth.on("blur change", checkDate);

  function checkDate() {
    var dob = this.value.split("-");
    // Pass toggleParentsConsent() the date of birth as a date object
    toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
  }

  function toggleParentsConsent(date) {
    if (isNaN(date)) return;
    var now = new Date();
    // If diff less than 13 years (ms * seconds * mins * hours * days * years)
    // does not account for leap years!
    // if the user is less than 13 we show parents consent tickbox
    if (now - date < 1000 * 60 * 60 * 24 * 365 * 13) {
      $consentContainer.removeClass("hide");
      $parentsConsent.focus();
    } else {
      $consentContainer.addClass("hide");
      $parentsConsent.prop("checked", false);
    }
  }
})();
