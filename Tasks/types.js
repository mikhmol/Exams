// Count types in array
'use strict';

{
  const types = s => {
    const types = (
      {
        "number": 0,
        "string": 0,
        "boolean": 0,
      }
    );
    for (const i of s) {
      const t = typeof i;
      types[t]++;
    }
    s.push('string');
    return types;
  };

  const result = types([5, true, 'string', 7, 'hello']);
  console.log(result);
}

{
  const types = arr => {
    const types = { number: 0, string: 0, boolean: 0 };
    for (const value of arr) {
      const type = typeof value;
      types[type]++;
    }
    return types;
  };

  const result = types([5, true, 'string', 7, 'hello']);
  console.log(result);
}
