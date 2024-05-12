"use strict";

let titles = document.querySelectorAll("[data-title]");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.style.backgroundColor = "brown";
    title.classList.toggle("rotate");
    for (let check = 0; check < titles.length; check++) {
      if (titles[check] == title) {
        let equal = titles[check].nextElementSibling;
        equal.classList.toggle("override");
        if (equal.classList.contains("override")) {
          let height = equal.scrollHeight;
          equal.style.height = height + "px";
        } else {
          equal.style.height = 0 + "px";
        }
      } else {
        let notEqual = titles[check].nextElementSibling;
        notEqual.classList.remove("override");
        notEqual.style.height = 0 + "px";
      }
    }
  });
});
