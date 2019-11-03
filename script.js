"use strict";

console.log(document.querySelector("#square > rect").width.baseVal.value);

var audio = new Audio("DuckTales Music (NES) - The Moon Theme.mp3");
const assignmentName = document
  .querySelector("body > svg > text")
  .textContent.trim();

let i = 0;
let delay = 50;
document.querySelector("body > svg > text").textContent = "";

document.querySelector("#button > circle").addEventListener("click", e => {
  document.querySelector("#button > circle").style.r = "100%";
  startIntro();
});

function startIntro() {
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("#button > circle").style.display = "none";
    audio.play();
    audio.volume = 0.1;

    setTimeout(() => {
      screenOne();
      //screenTwo();
      //screenThree();
    }, 2800);
  }, 800);
}

function screenOne() {
  if (i < assignmentName.length) {
    document.querySelector("body > svg > text").textContent +=
      assignmentName[i];
    i++;
    setTimeout(screenOne, delay + Math.floor(Math.random() * 20));
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
  var text = `By Broken Joystick`;
  if (i < text.length) {
    document.querySelector("body > svg > text").textContent += text[i];
    i++;
    setTimeout(typeGroupName, delay + Math.floor(Math.random() * 20));
  } else {
    setTimeout(() => {
      maskLogo();
    }, 2000);
  }
}

function maskLogo() {
  document.querySelector("#square > rect").width.baseVal.value = 0;
  setTimeout(() => {
    document.querySelector("body > svg > text").style.display = "none";
    screenTwo();
  }, 1000);
}

function screenTwo() {
  document.querySelector("#circle > circle").setAttribute("cx", "50%");
  setTimeout(() => {
    document.querySelector("#circle > circle").style.transition = "r 0.8s";
    setTimeout(() => {
      document.querySelector("#circle > circle").setAttribute("r", "100%");
      setTimeout(() => {
        document.querySelector("body > svg > foreignObject").style.opacity =
          "0";
        setTimeout(() => {
          screenThree();
        }, 1000);
      }, 6000);
    }, 500);
  }, 900);
}

function screenThree() {
  document.querySelector("body > svg > text").textContent = "Dominykas";
  document.querySelector("body > svg > text").style.display = "block";
  document.querySelector("#square > rect").setAttribute("width", "100%");
  setTimeout(() => {
    document.querySelector("#square > rect").setAttribute("width", "0");
    document.querySelector("body > svg > foreignObject").style.display = "none";
    document.querySelector("#dominykas").style.display = "block";
    document.querySelector("#dominykas").play();
    document.querySelector("#dominykas").loop = true;
    document.querySelector("#dominykas").volume = 0;
    document.querySelector("#dominykas").style.animation = "wow 5s 1";
  }, 2000);
}

document
  .querySelector("#dominykas")
  .addEventListener("animationend", screenFour);

function screenFour() {
  document.querySelector("#dominykas").pause();
  document.querySelector("#dominykas").style.display = "none";
  document.querySelector("body > svg > image").style.opacity = 100;
  setTimeout(() => {
    document.querySelector("#just-wow > rect").style.transition = "height 1s";
    document.querySelector("#just-wow > rect").setAttribute("height", "200");
    setTimeout(() => {
      document.querySelector("#just-wow > rect").style.transition = "x 1s";
      document.querySelector("#just-wow > rect").setAttribute("x", "800");
      setTimeout(() => {
        document.querySelector("#just-wow > rect").style.transition = "y 1s";
        document.querySelector("#just-wow > rect").setAttribute("y", "300");
      }, 1200);
    }, 1200);
  }, 2000);
}
