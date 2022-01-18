// Convert number to file size in bytes, kb, mb, and gb
'use strict';

//step 1
// add use strict
// fix formatting
// use const if not reasigned
// wrap into code block
{
  const size = size => {
    if (size === 0) return '0';
    else {
      const exp = Math.floor(Math.log(size) / Math.log(1000));
      if (exp === 0) return size + ' byte';
      else if (exp === 1) return Math.round(size / 1000) + ' kb';
      else if (exp === 2) return Math.round(size / 1000000) + ' mb';
      else if (exp === 3) return Math.round(size / 1000000000) + ' gb';
    }
  };

  const result = size(123456);
  console.log(result);
}

//step 2
//delete else block
//remove duplicated code
{
  const size = size => {
    if (size === 0) return '0';
    const exp = Math.floor(Math.log(size) / Math.log(1000));
    const value = Math.round(size / 1000 ** exp);
    let unit = 'byte';
    if (exp === 1) unit = ' kb';
    if (exp === 2) unit = ' mb';
    if (exp === 3) unit = ' gb';
    return value + unit;
  };

  const result = size(123456);
  console.log(result);
}

//step 3
//Cmd + Shift + Space - parameter hints
{
  const SIZE_UNITS = ['byte', 'kb', 'mb', 'gb', 'tb', 'pt'];

  const size = size => {
    if (size === 0) return '0';
    const exp = Math.floor(Math.log(size) / Math.log(1000));
    const value = Math.round(size / 1000 ** exp);
    const unit = SIZE_UNITS[exp];
    return value + unit;
  };

  const result = size(123456);
  console.log(result);
}
