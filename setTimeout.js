// function x() {
//   var i = 1;
//   setTimeout(function y() {
//     console.log(i);
//   }, 1000);
// }
// x();

// console.log("print num function");
// function printNum() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste JavaScript");
// }
// printNum();

function nums() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, i * 1000);
    }
    closure(i);
  }
}
nums();
