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
const greaterThanFour = arr.filter((num) => num > 4);
console.log(greaterThanFour);

//example

const users = [
  { firstName: "akshay", lastName: "Saini", age: 26 },
  { firstName: "donald", lastName: "Trump", age: 70 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Sri Harsha", lastName: "Akshintala", age: 28 },
];

const aboveFifty = users.filter(function (user) {
  return user.age > 50;
});

console.log(aboveFifty);
