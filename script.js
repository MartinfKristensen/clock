var btn = document.querySelector(".btn");
var body = document.body;
var clock = document.getElementById("clock");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    btn.innerHTML = "Light";
    check = 1;
    body.style.backgroundColor = "black";
    clock.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else {
    btn.innerHTML = "Dark ";
    check = 0;
    body.style.backgroundColor = "white";
    clock.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  }
});

setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
