// Reverse dict, exchange key and value
'use strict';

{
  const reverse = obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      const v1 = obj[key];
      obj[v1] = key;
      delete obj[key];
    });
    return obj;
  };

  const result = reverse({ a: 'uno', b: 'due', c: 'tre' });
  console.log(result);
}

{
  const reverse = obj => {
    const res = {};
    const keys = Object.keys(obj);
    keys.forEach(key => {
      const v1 = obj[key];
      res[v1] = key;
    });
    return res;
  };

  const result = reverse({ a: 'uno', b: 'due', c: 'tre' });
  console.log(result);
}
