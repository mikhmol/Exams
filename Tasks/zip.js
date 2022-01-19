// Find first word with two identical letters
'use strict';

{
  const zip = (cities = [], numbers = []) => {
    let i = 0;
    for (const number of numbers) {
      const cell = [cities[i], number];
      numbers[i] = cell;
      i++;
    }
    return numbers;
  };

  const result = zip(['Roma', 'Kiev', 'Beijing'], [100, 200, 300]);
  console.log(result);
}

{
  const zip = (cities = [], numbers = []) => {
    const res = [];
    for (let i = 0; i < numbers.length; i++) {
      const cell = [cities[i], numbers[i]];
      res.push(cell);
    }
    return res;
  };

  const result = zip(['Roma', 'Kiev', 'Beijing'], [100, 200, 300]);
  console.log(result);
}
