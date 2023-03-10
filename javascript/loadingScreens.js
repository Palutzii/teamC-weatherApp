// KOD FÖR ATT KÖRA LOADING SCREEN

export const loadingScreen = () => {
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");
  let hero = document.querySelector(".hero");

  // header.style.display = "none";
  main.style.display = "none";
  footer.style.display = "none";
  hero.style.display = "none";
};

// KOD FÖR ATT STÄNGA LOADING SCREEN

export const loadingScreenOff = () => {
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");
  let hero = document.querySelector(".hero");
  let body = document.querySelector("body");
  let loading = document.querySelector(".loading");

  // header.style.display = "block";
  body.classList.remove("loading");
  main.style.display = "block";
  footer.style.display = "flex";
  hero.style.display = "block";
  loading.remove();
};
