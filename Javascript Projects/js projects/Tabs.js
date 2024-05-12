"use strict";

let tabs = document.querySelectorAll("a");
let contents = document.querySelectorAll("section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i] == tab) {
        tabs[i].style.backgroundColor = "darkblue";
        tabs[i].style.color = "white";
        if (i == 0) {
          contents.forEach((content) => {
            content.style.display = "flex";
          });
        } else {
          for (let l = 0; l < contents.length; l++) {
            if (l == i - 1) {
              contents[l].style.display = "flex";
            } else {
              contents[l].style.display = "none";
            }
          }
        }
      } else {
        tabs[i].style.backgroundColor = "white";
        tabs[i].style.color = "darkblue";
      }
    }
  });
});
