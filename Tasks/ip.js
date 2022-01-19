// Split string by the first occurrence of separator
'use strict';

{
  const DELIMITTER = '.';

  const parseIp = ip => {
    const res = [];
    if (ip === '') return 0;
    else {
      const B = ip.split(DELIMITTER);
      // console.log(B);
      let j = 0;
      for (const b of B) {
        res[j] = parseInt(b);
        j++;
      }
    }
    return res;
  };

  const result = parseIp('127.0.0.1');
  console.log(result);
}

{
  const DELIMITTER = '.';

  const parseIp = ip => {
    const res = [];
    if (ip === '') return 0;
    else {
      const B = ip.split(DELIMITTER);
      for (const b of B) {
        res.push(parseInt(b));
      }
    }
    return res;
  };

  const result = parseIp('127.0.0.1');
  console.log(result);
}

{
  const DELIMITTER = '.';

  const parseIp = ip => {
    if (ip === '') return 0;
    else {
      const B = ip.split(DELIMITTER);
      return B.map(value => parseInt(value));
    }
  };

  const result = parseIp('127.0.0.1');
  console.log(result);
}

{
  const DELIMITTER = '.';

  const parseIp = ip => {
    if (ip === '') return 0;
    else {
      const B = ip.split(DELIMITTER);
      const res = [];
      B.forEach(value => res.push(parseInt(value)));
      return res;
    }
  };

  const result = parseIp('127.0.0.1');
  console.log(result);
}
