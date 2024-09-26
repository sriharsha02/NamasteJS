function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();

//assigning function to a varibale

function x() {
  let a = function y() {
    console.log(a);
  };
}
x();

//passing function as an argument

function x() {
  let a = 10;
  y();
}
x(function y() {
  console.log(a);
});

//returning function

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);

z();
//corner cases

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);

z(); // 100

//
console.log("a function");
function a() {
  var i = 900;
  function b() {
    let j = 10;
    function c() {
      console.log(i, j);
    }
    c();
  }
  b();
}
a();
