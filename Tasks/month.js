// Get month number
'use strict';

{
  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
    'aug', 'sep', 'oct', 'nov', 'dec'];

  const month = monthName => {
    const monthLength = MONTHS.length;
    for (let i = 0; i < monthLength; i++) {
      if (monthName.toLowerCase().startsWith(MONTHS[i])) return i + 1;
    }
    return -1;
  };

  const result = month('february');
  console.log(result);
}

{
  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
    'aug', 'sep', 'oct', 'nov', 'dec'];

  const month = monthName => MONTHS.indexOf(
    monthName.toLowerCase().substring(0, 3)) + 1;

  const result = month('february');
  console.log(result);
}

{
  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
    'aug', 'sep', 'oct', 'nov', 'dec'];

  const startWith = (monthName, prefix) =>
    monthName.toLowerCase().startsWith(prefix);

  const month = monthName => {
    const monthLength = MONTHS.length;
    for (let i = 0; i < monthLength; i++) {
      if (startWith(monthName, MONTHS[i])) return i + 1;
    }
    return -1;
  };

  const result = month('february');
  console.log(result);
}
