const respubBtn = document.getElementById("respub");
const rRespub = document.getElementById("rRespub");

respubBtn.onclick = function () {
  welcomeSec.style.display = "none";
  respubSec.style.display = "block";
}

rRespub.onclick = function () {
  respubSec.style.display = "none";
  welcomeSec.style.display = "block";
}