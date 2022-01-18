// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, p, s) => {
  const prefixIndex = str.indexOf(p);
  if (prefixIndex === -1) return '';
  const suffixIndex = str.indexOf(s);
  if (suffixIndex === -1) return '';
  const prefixLength = p.length;
  return str.substring(prefixIndex + prefixLength, suffixIndex);
};

const result = getValueBetween('Hello <username> and bye!', '<', '>');
console.log(result);
