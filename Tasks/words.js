// Count words
'use strict';

const countWords = (str = '') => {
  if (str === '') return 0;
  let numberOfWordsInLine = 1;
  for (const char of str) {
    if (char === ' ') {
      numberOfWordsInLine++;
    }
  }
  return numberOfWordsInLine;
};

const result = countWords('Hello Marcus Aureluis');
console.log(result);
