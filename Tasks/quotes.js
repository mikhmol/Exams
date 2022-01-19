// Change douple quotation to open or close quotation
'use strict';

const EMPTY = '';

{
  const quotes = str => {
    const res = [];
    let open = false;
    for (const char of str) {
      if (char === '"') {
        if (!open) {
          res.push('«');
          open = true;
        } else {
          res.push('»');
          open = false;
        }
      } else {
        res.push(char);
      }
    }
    return res.join(EMPTY);
  };

  const result = quotes('Hello "Marcus"! Ave "Marcus"!');
  console.log(result);
}
