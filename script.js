var dateInput = document.querySelector("#date-input");
dateInput.max = new Date().toISOString().split("T")[0];
var buttonClick = document.querySelector("#btn");
var resultDisplay = document.querySelector("#result");

buttonClick.addEventListener("click", calculateAge);

function calculateAge() {
  var birthDetails = new Date(dateInput.value);
  var currentDetails = new Date();
  var years;
  var months;
  var days;
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //these variables are used to get the birth details entered by the user.
  var birthDate = birthDetails.getDate();
  var birthMonth = birthDetails.getMonth();
  var birthYear = birthDetails.getFullYear();

  //these variables are used to get the current details of date.
  var currentDate = currentDetails.getDate();
  var currentMonth = currentDetails.getMonth();
  var currentYear = currentDetails.getFullYear();

  //this if Condition to calculate the exact year
  if (
    currentMonth > birthMonth ||
    (currentMonth == birthMonth && currentDate >= birthDate)
  ) {
    years = currentYear - birthYear;
  } else {
    years = currentYear - birthYear - 1;
  }

  //this if Condition to calculate the exact month
  if (currentDate >= birthDate) {
    months = currentMonth - birthMonth;
  } else {
    months = currentMonth - birthMonth - 1;
  }

  months = months < 0 ? months + 12 : months;

  //this if Condition to calculate the exact Days
  if (currentDate >= birthDate) {
    days = currentDate - birthDate;
  } else {
    days = currentDate - birthDate + monthDays[birthMonth];
  }

  //resultDisplay is used to display the Result
  resultDisplay.innerHTML = `You are ${years} years, ${months} months and ${days} days old.`;
}
