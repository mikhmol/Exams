// Generate random password
'use strict';

{
  const randomNumber = max => Math.floor(Math.random() * max);

  const generatePassword = (alphabet, length) => {
    const max = alphabet.length;
    let password = '';
    for (let i = 0; i < length; i++) {
      const index = randomNumber(max);
      password += alphabet[index];
    }
    return password;
  };

  const result = generatePassword('abc123', 7);
  console.log(result);
}
