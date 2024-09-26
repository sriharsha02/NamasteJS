var a = 100;
let b = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(a)
console.log(b);

//illegal shadowing

// let e = 10;
// {
//   var e = 20;
// }

//But this is allowed

var f = 10;
{
  let f = 20;
}
