const arr = [5, 6, 3, 4, 9];

//double the elements in array

function double(x) {
  return x * 2;
}

const doubleArr = arr.map(double);
console.log(doubleArr);

//Tripling

function triple(x) {
  return x * 3;
}

const tripleArr = arr.map(triple);
console.log(tripleArr);

//binary
function binary(x) {
  return x.toString(2);
}
const toBinary = arr.map(binary);
console.log(toBinary);

//example

const users = [
  { firstName: "akshay", lastName: "Saini", age: 26 },
  { firstName: "donald", lastName: "Trump", age: 70 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Sri Harsha", lastName: "Akshintala", age: 28 },
];

//list of full names

const fullNames = users.map(function (users) {
  return users.firstName + users.lastName;
});
console.log(fullNames);
