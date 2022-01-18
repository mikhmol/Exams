// Delete listed keys from dictionary
'use strict';

{
  const dropKeys = (dict, ...array) => {
    const keys = Object.keys(dict);
    keys.forEach(key => {
      if (array.includes(key)) {
        delete dict[key];
      }
    });
    return dict;
  };

  const result = dropKeys({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'f');
  console.log(result);
}

{
  const dropKeys = (dict, ...array) => {
    for (const key in dict) {
      if (array.includes(key)) {
        delete dict[key];
      }
    }
    return dict;
  };

  const result = dropKeys({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'f');
  console.log(result);
}

{
  const dropKeys = (dict, ...array) => {
    const res = Object.assign({}, dict);
    for (const key in res) {
      if (array.includes(key)) {
        delete res[key];
      }
    }
    return res;
  };
  const dict = { a: 'uno', b: 'due', c: 'tre' };
  const result = dropKeys(dict, 'b', 'f');
  console.log(result, dict);
}
