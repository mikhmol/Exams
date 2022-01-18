// Sum all numver values in dict
'use strict';

{
  const count = obj => {
    let sum = 0;
    const keys = Object.keys(obj);
    keys.forEach(key => {
      const value = obj[key];
      if (typeof value === 'number') sum += value;
    });
    return sum;
  };

  const result = count({ a: 1, b: 'two', c: 3, d: 4 });
  console.log(result);
}

//2

{
  const count = obj => {
    let sum = 0;
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'number') sum += value;
    }
    return sum;
  };

  const result = count({ a: 1, b: 'two', c: 3, d: 4 });
  console.log(result);
}

//3

{
  const count = obj => {
    const values = Object.values(obj);
    return values.filter(e => typeof e === 'number')
      .reduce((acc, e) => acc + e);
  };
  const result = count({ a: 1, b: 'two', c: 3, d: 4 });
  console.log(result);
}