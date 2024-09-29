//event listeners

document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked");
});

//closures with event listeners

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", count++);
  });
}

attachEventListener();

//Garbage Collection and remove event listeners
/*

Event listeners are heavy and cnsume memory, when not needed remove event listeners

*/
