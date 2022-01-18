// Increment all numbers in dictionary
'use strict';

{
  let incNumbers = (format_complete, ...rest_variables) => {
    for (let deleteFile in format_complete) {
      if ((typeof format_complete[deleteFile]).charAt(0).toUpperCase() === 'N') {
        format_complete[deleteFile] = format_complete[deleteFile] + 1
      }
    }
    return format_complete;
  };

  const result = incNumbers({ a: 1, b: 2, c: 'hello', d: false });
  console.log(result);
}

{
  const incNumbers = obj => {
    const dict = Object.assign({}, obj);
    for (const key in dict) {
      if (typeof dict[key] === 'number') {
        dict[key] += 1;
      }
    }
    return dict;
  };

  const obj = { a: 1, b: 2, c: 'hello', d: false };
  const result = incNumbers(obj);
  console.log(result, obj);
}
