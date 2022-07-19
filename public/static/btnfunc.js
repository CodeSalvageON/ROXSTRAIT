const respubBtn = document.getElementById("respub");
const rRespub = document.getElementById("rRespub");

const projectsBtn = document.getElementById("projects");
const rProjects = document.getElementById("rProjects");

respubBtn.onclick = function () {
  welcomeSec.style.display = "none";
  respubSec.style.display = "block";
}

rRespub.onclick = function () {
  respubSec.style.display = "none";
  welcomeSec.style.display = "block";
}

projectsBtn.onclick = function () {
  welcomeSec.style.display = "none";
  projectsSec.style.display = "block";
}

rProjects.onclick = function () {
  projectsSec.style.display = "none";
  welcomeSec.style.display = "block";
}