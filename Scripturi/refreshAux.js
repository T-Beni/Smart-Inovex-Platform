const bodyAll = document.getElementById("bodyAll");
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function displayBlock() {
  bodyAll.style.opacity = 1;
}
window.addEventListener("load", displayBlock);