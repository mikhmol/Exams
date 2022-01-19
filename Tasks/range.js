// Generate int array from given range
'use strict';

{
  const getRange = (...Range) => {
    const [from, to] = Range;
    if (to > from) {
      Range = new Array(to - from + 1);
      for (let i = from; i <= to; i++) {
        Range[i - from] = i;
      }
    } else {
      return [];
    }
    return Range;
  };

  const result = getRange(10, 15);
  console.log(result);
}

{
  const getRange = (from, to) => {
    if (to > from) {
      const size = to - from + 1;
      const range = new Array(size);
      for (let i = from; i <= to; i++) {
        range[i - from] = i;
      }
      return range;
    } else {
      return [];
    }
  };

  const result = getRange(10, 15);
  console.log(result);
}

{
  const getRange = (from, to) => {
    if (to > from) {
      const range = [];
      for (let i = from; i <= to; i++) {
        range.push(i);
      }
      return range;
    } else {
      return [];
    }
  };

  const result = getRange(10, 15);
  console.log(result);
}

{
  const getRange = (from, to) => {
    const range = [];
    for (let i = from; i <= to; i++) {
      range.push(i);
    }
    return range;
  };

  const result = getRange(10, 15);
  console.log(result);
}
