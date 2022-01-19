// Get one random element from array
'use strict';

{
  const sample = arr => arr[Math.floor(Math.random() * arr.length)];

  const result = sample([123, 456, 789, 222, 333, 444]);
  console.log(result);
}

{
  const random = max => Math.floor(Math.random() * max);

  const sample = arr => arr[random(arr.length)];

  const result = sample([123, 456, 789, 222, 333, 444]);
  console.log(result);
}