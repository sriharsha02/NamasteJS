//simple callback

function greet(name, callback) {
  console.log("Hello", name);
  callback();
}
function sayGoodBye() {
  console.log("Goodbye");
}
greet("Harsha", sayGoodBye);

//asynchronous callback

function fetchingData(callback) {
  setTimeout(() => {
    console.log("Fetching the data");
  }, 2000);
}
function processingData() {
  console.log("Processing the data....");
}

fetchingData(processingData);
