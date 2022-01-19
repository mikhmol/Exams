// Validate person name
'use strict';

{
  const isValidate = name => {
    if (!name) return false;
    if (name === '') return false;
    if (typeof name !== 'string') return false;
    if (name.length === 0) return false;
    if (!name.includes(' ')) return false; {
      for (const char of name) {
        if (char === ' ') continue;
        if (char.toLowerCase().charCodeAt(0) >= 97 &&
          char.toLowerCase().charCodeAt(0) <= 122) {

        } else {
          return false;
        }
      }
      return true;
    }
  };

  const result = isValidate('Marcus Aurelius');
  console.log(result);
}

{
  const isValid = (name = '') => {
    if (name === '') return false;
    if (typeof name !== 'string') return false;
    for (const char of name) {
      if (char === ' ') continue;
      const charCode = char.toLowerCase().charCodeAt(0);
      if (charCode < 97 || charCode > 122) {
        return false;
      }
    }
    return true;
  };

  const result = isValid('Marcus Aurelius');
  console.log(result);
}
