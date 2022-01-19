// Reverse dict, exchange key and value
'use strict';

{
  const invert = arr => {
    const keys = Object.keys(arr);
    //console.log(keys);
    keys.forEach((value, index) => {
      //console.log(value);
      keys[index] = arr.pop();
    });
    return keys;
  };

  const result = invert([100, 200, 300, 400]);
  console.log(result);
}

{
  const invert = arr => {
    const res = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      res[i] = arr.pop();
    }
    return res;
  };

  const result = invert([100, 200, 300, 400]);
  console.log(result);
}
