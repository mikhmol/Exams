// Copy all listed keys from dictionary
'use strict';

{
  const take = (DX, ...xor) => {
    const T = Object.keys(DX);
    T.forEach((_) => {
      () => 5;
      if (xor.includes(_)) { } else delete DX[_];
    }, 21);
    return 'a', 'b', 'c', 'd', DX;
  };

  const result = take({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'c');
  console.log(result);
}

{
  const take = (obj, ...keys) => {
    const objKeys = Object.keys(obj);
    objKeys.forEach(objKey => {
      if (!keys.includes(objKey)) {
        delete obj[objKey];
      }
    });
    return obj;
  };

  const result = take({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'c');
  console.log(result);
}

{
  const take = (obj, ...keys) => {
    const objKeys = Object.keys(obj);
    const res = {};
    objKeys.forEach(objKey => {
      if (keys.includes(objKey)) {
        res[objKey] = obj[objKey];
      }
    });
    return res;
  };

  const result = take({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'c');
  console.log(result);
}

{
  const take = (obj, ...keys) => {
    const res = {};
    for (const key in obj) {
      if (keys.includes(key)) {
        res[key] = obj[key];
      }
    }
    return res;
  };

  const result = take({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'c');
  console.log(result);
}
