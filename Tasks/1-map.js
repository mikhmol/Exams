'use strict';

{
  const arr = [1, 7, 14];
  for (const value of arr) {
    console.log(value);
  }
}

{
  const arr = [1, 7, 14];
  arr.map((value, index) => console.log(value, index));
}
