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
  return a + b;
}
add(2, 3);

//First class functions

//Arrow Functions
