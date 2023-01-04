"use strict";
const showToggle = document.querySelectorAll(".show");
const hide = document.querySelector(".hide");

showToggle.forEach((item) => {
  item.addEventListener("click", function () {
    let active = this.nextElementSibling;
    active.style.display = active.style.display === "block" ? "none" : "block";

    // acive.style.maxHeight =
    //   acive.style.maxHeight === "0px" ? `${acive.scrollHeight}px` : "0px";
    // console.log(Number(acive.style.scrollHeight));
    // if (active.style.maxHeight) {
    //   active.style.maxHeight = null;
    // } else {
    //   active.style.maxHeight = active.scrollHeight + "px";
    // }
  });
});
