console.log("Start");

setTimeout(() => {
  console.log("Callback");
});

console.log("End");

//blocking the main thread

let startDate = new Date().getTime();

let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While Expires");

//setTimeout(0)

console.log("start");

setTimeout(() => {
  console.log("callback");
}, 0);
console.log("end");
