"use strict";
var audio = new Audio("DuckTales Music (NES) - The Moon Theme.mp3");

document
  .querySelector("#button > circle")
  .addEventListener("click", startIntro);

function startIntro() {
  document.querySelector("#button > circle").style.r = "100%";
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("#button > circle").style.display = "none";
    audio.play();
  }, 800);
}
