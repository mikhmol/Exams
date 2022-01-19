// Remove values from array
'use strict';

{
  const skip = (arr, ...remove) => {
    let x = 0;
    for (const C of arr) {
      for (const X of remove) {
        if (C === X) {
          arr.splice(x, 1);
        }
      }
      x++;
    }
    return arr;
  };

  const result = skip([1, 2, 3, 4, 5], 2, 5);
  console.log(result);
}

{
  const skip = (arr, ...remove) => {
    let x = 0;
    for (const C of arr) {
      for (const X of remove) {
        if (C === X) {
          arr.splice(x, 1);
        }
      }
      x++;
    }
    return arr;
  };

  const result = skip([1, 2, 3, 4, 5], 2, 5);
  console.log(result);
}

{
  const skip = (arr, ...remove) => {
    for (const value of remove) {
      const index = arr.indexOf(value);
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
    return arr;
  };

  const result = skip([1, 2, 3, 4, 5], 2, 5);
  console.log(result);
}

{
  const skip = (arr, ...remove) => arr.filter(el => !remove.includes(el));

  const result = skip([1, 2, 3, 4, 5], 2, 5);
  console.log(result);
}


