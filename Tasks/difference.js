// Finde a difference of two dictionaries
'use strict';

{
  const diff = function diff(object1, object2) {
    for (const attributeName in object2) {
      if (object1[attributeName] === object2[attributeName]) {
        delete object1[attributeName];
      }
    }
    return object1;
  };

  const result = diff({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
  console.log(result);
}

{
  const diff = (object1, object2) => {
    const keys = Object.keys(object2);
    for (const attributeName of keys) {
      console.log(attributeName);
      if (object1[attributeName] === object2[attributeName]) {
        delete object1[attributeName];
      }
    }
    return object1;
  };

  const result = diff({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
  console.log(result);
}
