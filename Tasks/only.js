// Copy only listed values from dict
'use strict';

{
  const only = (obj, ...filteredKeys) => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      if (!filteredKeys.includes(key)) {
        delete obj[key];
      }
    });
    return obj;
  };

  const result = only({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
  console.log(result);
}


{
  const only = (obj, ...filteredKeys) => {
    for (const key in obj) {
      if (!filteredKeys.includes(key)) {
        delete obj[key];
      }
    }
    return obj;
  };

  const result = only({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
  console.log(result);
}

{
  const only = (obj, ...keys) => {
    const res = {};
    for (const key of keys) {
      if (obj[key]) res[key] = obj[key];
    }
    return res;

  };

  const result = only({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
  console.log(result);
}

