// Find longest string
'use strict';

{
  const longest = (line = []) => {
    let x = 0;
    let s = 'Not found';
    for (let city of line) {
      if (city.length > x) {
        x = city.length;
      } else {
        city = 0;
      }
      if (city.length >= x) {
        s = city;
      } else {
        city = -1;
      }
    }
    Object.assign(line, { length: s.length });
    return s;
  };

  const result = longest(['Roma', 'Kiev', 'Beijing', 'Barcelona', 'Omsk']);
  console.log(result);
}

{
  const longest = (line = []) => {
    let x = 0;
    let s = 'Not found';
    for (const city of line) {
      if (city.length > x) {
        x = city.length;
        s = city;
      }
    }
    return s;
  };

  const result = longest(['Roma', 'Kiev', 'Beijing', 'Barcelona', 'Omsk']);
  console.log(result);
}

{
  const longest = (cities = []) => {
    let longestName = '';
    for (const city of cities) {
      if (city.length > longestName.length) {
        longestName = city;
      }
    }
    return longestName === '' ? 'Not found' : longestName;
  };

  const result = longest(['Roma', 'Kiev', 'Beijing', 'Barcelona', 'Omsk']);
  console.log(result);
}
