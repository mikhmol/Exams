// Get day number
'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

{
  const getDayNumber = function (dayName = '') {
    for (let i = 0; i < DAYS.length; i++) {
      const dayPrefix = DAYS[i].toLowerCase();
      if (dayName.startsWith(dayPrefix)) {
        return i + 1;
      }
    }
  };

  const result = getDayNumber();
  console.log(result);
}

//2

{
  const getDayNumber = (dayName = '') => {
    const dayPrefix = dayName.substring(0, 1).toUpperCase() +
      dayName.substring(1, 3).toLowerCase();
    console.log(dayPrefix);
    const dayNumber = DAYS.indexOf(dayPrefix);
    return dayNumber === -1 ? -1 : dayNumber + 1;
  };

  const result = getDayNumber('Monday');
  console.log(result);
}