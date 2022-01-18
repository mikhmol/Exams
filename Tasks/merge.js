// Merge two dictionaries
'use strict';

const merge = (...sources) => Object.assign(...sources);

const copy = (target, source) => {
  for (const property in source) {
    target[property] = source[property];
  }
};

const mergeTwoObjects = (...objects) => {
  const target = {};
  copy(target, objects[0]);
  copy(target, objects[1]);
  return target;
};

const result = merge({ a: 'uno', b: 'due' }, { c: 'tre' }, {a: '100'});
console.log(result);
