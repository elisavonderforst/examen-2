var one = document.querySelector(".menu-two");
var two = document.querySelector(".button-menu");
var three = document.querySelector(".burger-menu-open");
var four = document.querySelector(".button-burger");
var five = document.querySelector(".burger-menu");
var six = document.querySelectorAll(".a-click");
var seven = document.querySelector(".main");
var eight = document.querySelector(".img-header");
var nine = document.querySelector(".footer");
var ten = document.querySelector(".evenements");

var changeOne = function () {
  one.classList.toggle("is-hidden");
};

two.addEventListener("click", changeOne);

var burgerMobile = function () {
  three.classList.toggle("is-open");
  five.classList.toggle("is-covert");
  seven.classList.toggle("is-covert");
  eight.classList.toggle("is-covert");
  nine.classList.toggle("is-covert");
};

four.addEventListener("click", burgerMobile);

six.forEach(function (link) {
  link.addEventListener("click", burgerMobile);
});
