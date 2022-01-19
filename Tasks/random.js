// Generate random integer value in given range
'use strict';

{
  const random = (min, max) => {
    if (max === undefined) {
      max = min;
      return Math.floor(Math.random() * (max + 1));
    } else {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
  };

  const result = random(1, 9);
  console.log(result);
}

{
  const randomNumber = maxNumber => Math.floor(Math.random() * maxNumber);

  const random = (min, max) => {
    if (max === undefined) {
      return randomNumber(min + 1);
    } else {
      return min + randomNumber(max - min + 1);
    }
  };

  const result = random(1, 5);
  console.log(result);
}
