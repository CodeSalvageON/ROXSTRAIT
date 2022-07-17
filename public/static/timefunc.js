let newYear = new Date().getFullYear();
let oldYear = String(newYear).charAt(String(newYear).length - 1);
let currentYear = document.getElementById("last-acs");

currentYear.innerText = "Current Year: 199" + oldYear;