//Function statement also known as Function Declaration

function a() {
  console.log("a is called");
}

a();
//Function Expression
var b = function () {
  console.log("b is called");
};
b();

//Anonymous Functions

// function(){

// }

//Named Function Expression
// var factorial = function fact() {
//   console.log("fact is called");
// };

// fact();

var factorial = function fact() {
  console.log(fact);
};
factorial();
//Difference between parameters and Arguments

function add(a, b) {
  // a and b are parameters
  return a + b;
}
add(2, 3); // 2,3 are arguments

//First class functions

//-----> Assigning functions to varibles

console.log("--> Assigning functions to varibles: ");
const greet = function () {
  console.log("Hello from greet function");
};
greet();

//-------> Passing as argument to other function

console.log("--> Passing as argument to other function:");
function executeFunction(fn) {
  fn();
}
executeFunction(function () {
  console.log("this is a function passed as an argument.");
});

//-----> Returning from other functions
console.log("-----> Returning from other functions");

function outerFunction() {
  return function () {
    console.log("This function is returned from outer function");
  };
}
const innerFunction = outerFunction();
innerFunction();
//----> Storing functions in an array

console.log("----> Storing functions in an array");
const arrayOfFunctions = [
  function () {
    console.log("First function");
  },
  function () {
    console.log("Second function");
  },
];
arrayOfFunctions[0]();
arrayOfFunctions[1]();

const person = {
  myName: "harsha",
  greet: function () {
    console.log(`Hello ${this.myName}`);
  },
};

person.greet();
//Arrow Functions
