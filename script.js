"use strict";

console.log(document.querySelector("#square > rect").width.baseVal.value);

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
    audio.volume = 0.1;

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
      deleteText(document.querySelector("body > svg > text").textContent);
    }, 2000);
  }
}

function deleteText(input) {
  if (input.length > 0) {
    document.querySelector("body > svg > text").textContent = input.substring(
      0,
      input.length - 1
    );
    setTimeout(() => {
      deleteText(document.querySelector("body > svg > text").textContent);
    }, delay + Math.floor(Math.random() * 20));
  } else {
    i = 0;
    typeRealName();
  }
}

function typeRealName() {
  var text = `"The Intro"`;
  if (i < text.length) {
    document.querySelector("body > svg > text").textContent += text[i];
    i++;
    setTimeout(typeRealName, delay + Math.floor(Math.random() * 20));
  } else {
    setTimeout(() => {
      deleteRealName(document.querySelector("body > svg > text").textContent);
    }, 2000);
  }
}

function deleteRealName(input) {
  if (input.length > 0) {
    document.querySelector("body > svg > text").textContent = input.substring(
      0,
      input.length - 1
    );
    setTimeout(() => {
      deleteRealName(document.querySelector("body > svg > text").textContent);
    }, delay + Math.floor(Math.random() * 20));
  } else {
    i = 0;
    typeGroupName();
  }
}

function typeGroupName() {
  var text = `By GroupName`;
  if (i < text.length) {
    document.querySelector("body > svg > text").textContent += text[i];
    i++;
    setTimeout(typeGroupName, delay + Math.floor(Math.random() * 20));
  } else {
    setTimeout(() => {
      document.querySelector("#square > rect").width.baseVal.value = 0;
    }, 2000);
  }
}
