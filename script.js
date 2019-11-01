"use strict";

var audio = new Audio("DuckTales Music (NES) - The Moon Theme.mp3");
const assignmentName = document
  .querySelector("body > svg > text")
  .textContent.trim();

let i = 0;
let delay = 50;
document.querySelector("body > svg > text").textContent = "";

document
  .querySelector("#button > circle")
  .addEventListener("click", startIntro);

function startIntro() {
  document.querySelector("#button > circle").style.r = "100%";
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("#button > circle").style.display = "none";
    audio.play();

    setTimeout(() => {
      typeName();
    }, 2800);
  }, 800);
}

function typeName() {
  if (i < assignmentName.length) {
    document.querySelector("body > svg > text").textContent +=
      assignmentName[i];
    i++;
    setTimeout(typeName, delay + Math.floor(Math.random() * 20));
  } else {
    setTimeout(() => {
      explainName();
    }, 2000);
  }
}

function explainName() {
  document.querySelector("body > svg > text").textContent = "type";
}
