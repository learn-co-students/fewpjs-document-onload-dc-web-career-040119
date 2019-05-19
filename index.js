// Your code goes here
//second
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});


//first
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

//third
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("text").innerHTML = "This is really cool!"
  console.log("This should be the last console.log().")
});
