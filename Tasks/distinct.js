// Deduplicate values in array
'use strict';

{
  const distinct = data => {
    const ab = new Set();
    let w = 0;
    data.forEach(a => {
      if (ab.has(a)) {
        data.splice(w, 1);
      } else {
        ab.add(a);
      }
      w++;
    });
    return data;
  };

  const result = distinct([1, 2, 1, 3, 1, 4]);
  console.log(result);
}

{
  const distinct = data => {
    const uniqSet = new Set();
    data.forEach(value => {
      uniqSet.add(value);
    });
    return uniqSet;
  };

  const result = distinct([1, 2, 1, 3, 1, 4]);
  console.log(result);
}

{
  const distinct = data => {
    const uniqSet = new Set();
    data.forEach(value => {
      uniqSet.add(value);
    });
    // const res = [];
    // for (const value of uniqSet) {
    //   res.push(value);
    // }
    // return [...uniqSet];
    return Array.from(uniqSet);
  };

  const result = distinct([1, 2, 1, 3, 1, 4]);
  console.log(result);
}
