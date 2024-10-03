const arr = [5, 1, 3, 2, 6];

//sum

function findSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(findSum(arr));

//using reduce

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

//max

function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

//using reduce

const maxOutput = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(maxOutput);

//example

const users = [
  { firstName: "akshay", lastName: "Saini", age: 26 },
  { firstName: "donald", lastName: "Trump", age: 70 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Sri Harsha", lastName: "Akshintala", age: 28 },
];

const sameAgeNumber = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(sameAgeNumber);
