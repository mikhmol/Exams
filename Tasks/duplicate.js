// Push single value multiple times
'use strict';

{
  const duplicate = (value, times) => {
    if (times <= 0) return [];
    else {
      const res = [];
      for (let i = 0; i < times; i++) {
        res[i] = value;
      }
      return res;
    }
  };

  const result = duplicate('abc', 5);
  console.log(result);
}

{
  const duplicate = (value, times) => {
    //if (times <= 0) return [];
    const res = new Array(times);
    return res.fill(value);
  };

  const result = duplicate('abc', 5);
  console.log(result);
}

{
  const duplicate = (value, times) => {
    //if (times <= 0) return [];
    const res = [1, 1, 1, 1, 1];
    res.splice(0, 4, value);
    return res;
  };

  const result = duplicate('abc', 5);
  console.log(result);
}
