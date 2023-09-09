let utc = document.querySelector('[data-testid="currentUTCTime"]');
let currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]')
const arrayOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekDay = new Date().getUTCDay();
currentDay.innerText = arrayOfDays[weekDay];

setInterval(() => {
    const currentTimeUTC = new Date().getTime();
    utc.innerText = currentTimeUTC.toString();
}, 1);