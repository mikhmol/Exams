// Copy all values from dict except listed
'use strict';

{
  const except = (dict, ...no) => {
    const res = Object.assign({}, dict);
    const keys = Object.keys(res);
    keys.forEach(key => {
      if (no.includes(key)) {
        delete res[key];
      }
    });
    return res;
  };

  const obj = { a: 1, b: 'two', c: 3, d: 4 };
  const result = except(obj, 'a', 'd');
  console.log(result);
}

{
  const except = (dict, ...no) => {
    const res = { ...dict };
    const keys = Object.keys(res);
    keys.forEach(key => {
      if (no.includes(key)) {
        delete res[key];
      }
    });
    return res;
  };

  const obj = { a: 1, b: 'two', c: 3, d: 4 };
  const result = except(obj, 'a', 'd');
  console.log(result);
}

{
  const except = (dict, ...no) => {
    const res = JSON.parse(JSON.stringify(dict));
    const keys = Object.keys(res);
    keys.forEach(key => {
      if (no.includes(key)) {
        delete res[key];
      }
    });
    return res;
  };

  const obj = { a: 1, b: 'two', c: 3, d: 4 };
  const result = except(obj, 'a', 'd');
  console.log({ result });
}
