const svg = document.getElementById("graficPrincipal");
const path = document.getElementById("linieCursor");

let graficPoz = [40, 190, 340, 490, 640, 790, 940];

const width = svg.getBoundingClientRect().width;

// linia ascunsă inițial
path.style.opacity = 0;

let active = false;

svg.addEventListener("mouseenter", () => {
  active = true;
  path.style.opacity = 1;
});

svg.addEventListener("mouseleave", () => {
  active = false;
  path.style.opacity = 0;
});

svg.addEventListener("mousemove", (e) => {
  if (!active) return;

  const rect = svg.getBoundingClientRect();

  let cursorX = e.clientX - rect.left;

  // normalize (dacă nu ai viewBox)
  cursorX = (cursorX / width) * 940;

  let closestIndex = 0;
  let closestDist = Math.abs(graficPoz[0] - cursorX);

  for (let i = 1; i < graficPoz.length; i++) {
    let dist = Math.abs(graficPoz[i] - cursorX);

    if (dist < closestDist) {
      closestDist = dist;
      closestIndex = i;
    }
  }

  let x = graficPoz[closestIndex];

  // linie verticală + animare smooth prin transform
  path.setAttribute("d", `M ${x} 5 L ${x} 218`);

  // mic „smooth move”
  path.style.transform = "translateZ(0)";

  console.log("Index:", closestIndex);
  console.log("X:", x);
});