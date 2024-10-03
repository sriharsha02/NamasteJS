//combining map filter reduce

const users = [
  { firstName: "akshay", lastName: "Saini", age: 26 },
  { firstName: "donald", lastName: "Trump", age: 70 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Sri Harsha", lastName: "Akshintala", age: 28 },
];

//first name of all the people whose age is less then 30

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);
