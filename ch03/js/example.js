/* This script is placed inside an immediately invoked function expression (IIFE) which helps protect the scope of variables */
(function() {
  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
  // Create a hotel object using constructor syntax
  function Hotel(name, roomRate, discount) {
    this.name = name;
    this.roomRate = roomRate; // in dollars
    this.discount = discount; // percentage discount

    this.offerPrice = function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    };
  }

  var hotel = new Hotel("Park", 240, 15);

  var hotelName = document.getElementById("hotelName");
  var roomRate = document.getElementById("roomRate");
  var specialRate = document.getElementById("specialRate");

  hotelName.textContent = hotel.name;
  roomRate.textContent = `$${hotel.roomRate.toFixed(2)}`;
  specialRate.textContent = `$${hotel.offerPrice()}`;

  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg;
  var today;
  var elEnds;

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // Add 7 days time (in ms)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // Create arrays to hold the names of days/months
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create the message
    expiryMsg = `Offer expires next ${day}<br />(${date} ${month} ${year})`;
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById("offerEnds");
  elEnds.innerHTML = offerExpires(today);
})();
