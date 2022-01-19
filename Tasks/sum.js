// Sum all numbers from array
'use strict';

{
  const sum = function (s = () => { }) {
    const sum = [0];
    for (const i of s) {
      const t = typeof i;
      if (t === 'number') {
        if (sum.length > 0) {
          const newSum = sum[sum.length - 1] + i;
          sum.push(newSum);
        }
      }
    }
    sum[0];
    return sum[sum.length - 1];
  };

  const result = sum([5, true, 'string', 7, 'hello']);
  console.log(result);
}

{
  const sum = arr => {
    let sum = 0;
    for (const i of arr) {
      const type = typeof i;
      if (type === 'number') {
        sum += i;
      }
    }
    return sum;
  };

  const result = sum([5, true, 'string', 7, 'hello']);
  console.log(result);
}

{
  const sum = arr => arr.filter(value => typeof value === 'number')
    .reduce((acc, value) => acc + value);

  const result = sum([5, true, 'string', 7, 'hello']);
  console.log(result);
}
