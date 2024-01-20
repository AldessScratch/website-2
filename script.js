
function displayDateTime() {
    const currentDate = new Date();
    
  
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
  
    // Add leading zeros if needed
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
  
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
  }

  setInterval(displayDateTime, 1000);
  displayDateTime();
  const timebg = document.getElementById('timebg');
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 6 && hour < 8) {
      timebg.style.backgroundImage = 'url("./img/bg/rff.jpg")';
} else if (hour >= 17 && hour < 18) {
timebg.style.backgroundImage = 'url("./img/bg/orange.jpg")';
} else if (hour >= 7 && hour < 17) {
timebg.style.backgroundImage = 'url("./img/bg/vert.jpg")';
} else {
timebg.style.backgroundImage = 'url("./img/bg/dark.jpg")';
}

const birthdayMonth = 0; // January (0 - 11)
const birthdayDay = 25; // 1st day of the month

function updateDaysRemaining() {
  const today = new Date();
  const currentYear = today.getFullYear();

  let nextBirthday = new Date(currentYear, birthdayMonth, birthdayDay);

  // Check if the birthday has passed this year, if yes, set it to next year
  if (today > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, birthdayMonth, birthdayDay);
  }

  // Check if today is the birthday
  if (
    today.getMonth() === birthdayMonth &&
    today.getDate() === birthdayDay
  ) {
    // It's your birthday!
    document.getElementById('daysRemaining').textContent = 'Happy Birthday Aldess!';
    document.getElementById('untilbirthday').style.display = 'none'; // Hide the element
    return;
  }

  // Calculate the difference between today and nextBirthday
  const difference = nextBirthday - today;
  const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

  const daysRemainingElement = document.getElementById('daysRemaining');
  const untilBirthdayElement = document.getElementById('untilbirthday');

  // Show the correct days remaining
  daysRemainingElement.textContent = `${daysRemaining} days`;
}

// Call the function to display days remaining
updateDaysRemaining();
