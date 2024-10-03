const arr = [5, 1, 3, 2, 6];

//odd values
function isOdd(x) {
  return x % 2;
}
const odd = arr.filter(isOdd);
console.log(odd);

//even

function isEven(x) {
  return x % 2 === 0;
}
const even = arr.filter(isEven);
console.log(even);

// >4
function isEven(x) {
  return x > 4;
}
const greaterThanFour = arr.filter(greaterThanFour);
console.log(greaterThanFour);
