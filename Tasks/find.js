// Find key by value
'use strict';

{
  const find = (object, value) => {
    for (const key in object) {
      if (object[key] === value) {
        return key;
      }
    }
  };

  const result = find({ a: 1, b: 2, c: 'hello', d: false }, 'false');
  console.log(result);
}
