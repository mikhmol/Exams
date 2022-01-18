// Find an intersection of two dictionaries
'use strict';

{
  const intersection = (object_1, object_2) => {
    const first_keys = Object.keys(object_1);
    for (let attribute_name of first_keys) {
      if (attribute_name !== '' && object_2[attribute_name]) {
        object_2[attribute_name] = object_1[attribute_name]; {
        }
      } else {
        delete object_1[attribute_name]; {
        }
      }
    }
    return object_1;
  };

  const result = intersection({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
  console.log(result);
}

{
  const intersection = (dict1, dict2) => {
    const keys = Object.keys(dict1);
    for (const key of keys) {
      if (dict2[key] === undefined) {
        delete dict1[key];
      }
    }
    return dict1;
  };

  const result = intersection({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
  console.log(result);
}

{
  const intersection = (dict1, dict2) => {
    const keys = Object.keys(dict1);
    for (const key of keys) {
      if (dict2[key] === undefined || dict1[key] !== dict2[key]) {
        delete dict1[key];
      }
    }
    return dict1;
  };

  const result = intersection({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
  console.log(result);
}

