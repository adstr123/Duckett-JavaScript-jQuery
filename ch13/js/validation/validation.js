// JavaScript validation of subscription form.
// A. Anonymous function triggered by submit event
// B. Functions called to perform generic checks by anon function in section A
// C. Functions called to perform generic checks by anon function in section A
// D. Functions to get / set / show / remove error messages
// E. Object to check type of data using RegEx called by validateTypes in section B

(function() {
  document.forms.register.noValidate = true; // Disable HTML5 validation - using JavaScript instead
  // -------------------------------------------------------------------------
  //  A) ANONYMOUS FUNCTION TRIGGERED BY THE SUBMIT EVENT
  // -------------------------------------------------------------------------
  $("form").on("submit", function(e) {
    var elements = this.elements;
    var valid = {};
    var isValid;
    var isFormValid;

    // PERFORM GENERIC CHECKS (calls functions outside the event handler)
    var i;
    for (i = 0, l = elements.length; i < l; i++) {
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
      // If it does not pass these two tests, show error messages
      // Otherwise, remove error messages
      if (!isValid) {
        showErrorMessage(elements[i]);
      } else {
        removeErrorMessage(elements[i]);
      }
      valid[elements[i].id] = isValid;
    }

    // PERFORM CUSTOM VALIDATION
    // bio (you could cache bio input in variable here)
    if (!validateBio()) {
      showErrorMessage(document.getElementById("bio"));
      valid.bio = false;
    } else {
      removeErrorMessage(document.getElementById("bio"));
    }

    // password (you could cache password input in variable here)
    if (!validatePassword()) {
      showErrorMessage(document.getElementById("password"));
      valid.password = false;
    } else {
      removeErrorMessage(document.getElementById("password"));
    }

    // parental consent (you could cache parent-consent in variable here)
    if (!validateParentsConsent()) {
      showErrorMessage(document.getElementById("parents-consent"));
      valid.parentsConsent = false;
    } else {
      removeErrorMessage(document.getElementById("parents-consent"));
    }

    // DID IT PASS / CAN IT SUBMIT THE FORM?
    // Loop through valid object, if there are errors set isFormValid to false
    for (var field in valid) {
      if (!valid[field]) {
        isFormValid = false;
        // Stop the for loop here, at least one error was found
        break;
      }
      // Otherwise the form is valid and OK to submit
      isFormValid = true;
    }

    // If the form did not validate, prevent it being submitted
    if (!isFormValid) {
      e.preventDefault();
    }
  });
  //  END: anonymous function triggered by the submit button

  // -------------------------------------------------------------------------
  // B) FUNCTIONS FOR GENERIC CHECKS
  // -------------------------------------------------------------------------

  // CHECK IF THE FIELD IS REQUIRED AND IF SO DOES IT HAVE A VALUE
  // Relies on isRequired() and isEmpty() both shown below, and setErrorMessage - shown later.
  function validateRequired(el) {
    if (isRequired(el)) {
      var valid = !isEmpty(el);
      if (!valid) {
        setErrorMessage(el, "Field is required");
      }
      return valid;
    }
    // if not required, all is OK
    return true;
  }

  // CHECK IF THE ELEMENT IS REQUIRED
  // It is called by validateRequired()
  function isRequired(el) {
    return (
      (typeof el.required === "boolean" && el.required) ||
      typeof el.required === "string"
    );
  }

  // CHECK IF THE ELEMENT IS EMPTY (or its value is the same as the placeholder text)
  // HTML5 browsers do allow users to enter the same text as placeholder, but in this case users should not need to
  // It is called by validateRequired()
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }

  // CHECK IF THE VALUE FITS WITH THE TYPE ATTRIBUTE
  // Relies on the validateType object (shown at end of IIFE)
  function validateTypes(el) {
    // If element has no value, return true
    if (!el.value) return true;

    var type = $(el).data("type") || el.getAttribute("type");
    if (typeof validateType[type] === "function") {
      return validateType[type](el);
    } else {
      return true;
    }
  }

  // -------------------------------------------------------------------------
  // C) FUNCTIONS FOR CUSTOM VALIDATION
  // -------------------------------------------------------------------------

  // IF USER IS UNDER 13, CHECK THAT PARENTS HAVE TICKED THE CONSENT CHECKBOX
  // Dependency: birthday.js (otherwise check does not work)
  function validateParentsConsent() {
    var parentsConsent = document.getElementById("parents-consent");
    var consentContainer = document.getElementById("consent-container");
    var valid = true;
    if (consentContainer.className.indexOf("hide") === -1) {
      // Update valid: is it checked/not
      valid = parentsConsent.checked;
      if (!valid) {
        setErrorMessage(parentsConsent, "You need your parents' consent");
      }
    }
    return valid;
  }

  // Check if the bio is less than or equal to 140 characters
  function validateBio() {
    var bio = document.getElementById("bio");
    var valid = bio.value.length <= 140;
    if (!valid) {
      setErrorMessage(
        bio,
        "Please make sure your bio does not exceed 140 characters"
      );
    }
    return valid;
  }

  // Check that the passwords both match and are 8 characters or more
  function validatePassword() {
    var password = document.getElementById("password");
    var valid = password.value.length >= 8;
    if (!valid) {
      setErrorMessage(
        password,
        "Please make sure your password has at least 8 characters"
      );
    }
    return valid;
  }

  // -------------------------------------------------------------------------
  // D) FUNCTIONS TO SET / GET / SHOW / REMOVE ERROR MESSAGES
  // -------------------------------------------------------------------------

  function setErrorMessage(el, message) {
    // Store error message with element dataset
    $(el).data("errorMessage", message);
  }

  function getErrorMessage(el) {
    return $(el).data("errorMessage") || el.title;
  }

  function showErrorMessage(el) {
    var $el = $(el);
    var errorContainer = $el.siblings(".error.message");

    // If no errors exist with the element, create a <span> element to hold the error and add it after the element with the error
    if (!errorContainer.length) {
      errorContainer = $('<span class="error message"></span>').insertAfter(
        $el
      );
    }
    errorContainer.text(getErrorMessage(el));
  }

  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings(".error.message");
    errorContainer.remove();
  }

  // -------------------------------------------------------------------------
  // E) OBJECT FOR CHECKING TYPES
  // -------------------------------------------------------------------------

  // Checks whether data is valid, if not set error message
  // Returns true if valid, false if invalid
  var validateType = {
    email: function(el) {
      // Rudimentary regular expression that checks for a single @ in the email
      var valid = /[^@]+@[^@]+/.test(el.value);
      if (!valid) {
        setErrorMessage(el, "Please enter a valid email");
      }
      return valid;
    },
    number: function(el) {
      var valid = /^\d+$/.test(el.value);
      if (!valid) {
        setErrorMessage(el, "Please enter a valid number");
      }
      return valid;
    },
    date: function(el) {
      var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
      if (!valid) {
        setErrorMessage(el, "Please enter a valid date");
      }
      return valid;
    }
  };
})(); // End of IIFE
