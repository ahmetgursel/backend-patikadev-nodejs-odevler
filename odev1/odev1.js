const pi = 3.14;
const arguments = process.argv.slice(2);
const result = pi * (arguments * arguments);
console.log(`Yarıçapı ${arguments} olan dairenin alanı: ${result}`);