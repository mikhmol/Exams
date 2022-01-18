// Filter array by type name
'use strict';

{
  const filter = (arr, t) => {
    for (const value of arr) {
      const index = arr.indexOf(value);
      if (typeof arr[index] !== t) {
        arr.splice(index, 1);
      }
    }
    return arr;
  };

  const result = filter([1, 2, 'three', 4, 5, 'six'], 'number');
  console.log(result);
}

{
  const filter = (arr, type) => {
    const res = [];
    for (let index = 0; index < arr.length; index++) {
      const value = arr[index];
      if (typeof value === type) {
        res.push(value);
      }
    }
    return res;
  };

  const result = filter([1, 2, 'three', 4, 5, 'six'], 'number');
  console.log(result);
}
