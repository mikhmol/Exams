// Compare two dictionaries
'use strict';

{
  const compare = (firstObj, secondObj) => {
    const a = Object.keys(firstObj);
    const b = Object.keys(secondObj);
    if (a.join('-') !== b.join('-')) return false;
    for (const key of a) {
      if (firstObj[key] !== secondObj[key]) return false;
    }
    return true;
  };

  const result = compare({ a: 1, c: 'hello' }, { a: 1, c: 'hello' });
  console.log(result);
}

//Step 2
{
  const compare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

  const result = compare({ a: 1, c: 'hello' }, { a: 1, c: 'hello' });
  console.log(result);
}