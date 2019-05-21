// Your code goes here
console.log("Loaded")

document.addEventListener("DOMContentLoaded", function(){
changeDisplayText()
});

function changeDisplayText(){
  let p = document.querySelector("#text")
  p.innerHTML = "This is really cool!"
}
