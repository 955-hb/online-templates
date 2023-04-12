function getRandomString(length) {
  let newPW = "";

  const char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "1234567890" +
    '!"§$%&/()=?#<>*_-+';

  const charLength = char.length;
  for (let i = 0; i < length; i++) {
    newPW += char.charAt(Math.floor(Math.random() * charLength));
  }
  return newPW;
}

console.log(getRandomString(10));
console.log(getRandomString(20));
console.log(getRandomString(30));
console.log(getRandomString(40));
console.log(getRandomString(50));
console.log(getRandomString(60));
console.log(getRandomString(70));
console.log(getRandomString(80));
console.log(getRandomString(90));
console.log(getRandomString(100));
