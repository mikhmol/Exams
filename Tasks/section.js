// Split string by the first occurrence of separator
'use strict';

{
  const sectionString = (str, separator) => {
    const i = str.indexOf(separator);
    if (i < 0) {
      return [str];
    } else {
      return [str.slice(0, i), str.slice(i + separator.length)];
    }
  };

  const result = sectionString('All you need is JavaScript', 'is');
  console.log(result);
}

{
  const sectionString = (str, separator) => str.split(separator);

  const result = sectionString('All you need is JavaScript', 'is');
  console.log(result);
}

