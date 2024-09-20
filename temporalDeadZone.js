//hoisting in let and const

let a = 10;
console.log(a);
var b = 100;

//re declaration

let x = 100;

// let x = 10; not possible

let c = 10;
c = 100;
console.log(c);

//const

const d = 100;

// const e; // error

//var and let can be declared without initial value

var y;
let z;
