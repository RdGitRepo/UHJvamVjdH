"use strict";

function VisibleInitialize(lastIndex, array) {
  const tabs = document.querySelectorAll("[data-tab]");
  const contents = document.querySelectorAll("[data-content]");
  const closeTab = document.querySelectorAll("[data-closeTab]");

  tabs.forEach((currentTab, index) => {
    currentTab.parentElement.classList.toggle("active", index === lastIndex);
    contents[index].style.display = index === lastIndex ? "block" : "none";

    currentTab.addEventListener("click", () => {
      for (let out = 0; out < contents.length; out++) {
        index === out? tabs[out].parentElement.classList.add("active")
          : tabs[out].parentElement.classList.remove("active");
        contents[out].style.display = index === out ? "block" : "none";
      }
    });

    closeTab[index].addEventListener("click", () => {
      array.splice(index, 1, false);
      closeTab[index].parentElement.classList.remove("visible");
      closeTab[index].parentElement.style.display = "none";
      const fi = array.indexOf(true, index);
      const bi = array.lastIndexOf(true, index);
      // console.log("fi :"+fi,"bi :"+bi);

      if (closeTab[index].parentElement.classList.contains("active")) {
        if (fi == -1 && bi >= 0) {
          closeTab[bi].previousElementSibling.click();
        }
        if (fi >= 0 && bi == -1) {
          closeTab[fi].previousElementSibling.click();
        }
        if (fi == -1 && bi == -1) {
          contents[index].innerHTML = "<h1 align='center'>Please open new tab </h1><h2 align='center'>'Zero tabs open'</h2> ";
        }
      }
    });
  });
}

document.querySelector("[data-openNewTab]").addEventListener("click", () => {
  const visibleTab = document.querySelector("[data-visibleTabs]");
  const copyTabData = document.querySelector("[data-copyTab]");
  const visibleContent = document.querySelector("[data-visibleContents]");
  const copyContentData = document.querySelector("[data-copyContent]");

  visibleTab.append(copyTabData.content.cloneNode(true));
  visibleContent.append(copyContentData.content.cloneNode(true));

  const lastIndex = visibleTab.children.length - 1;

  visibleTab.lastElementChild.classList.add("visible");
  visibleTab.lastElementChild.children[0].innerText = `Tab ${lastIndex + 1}`;
  visibleContent.lastElementChild.children[0].innerText = `Tab ${lastIndex + 1} Title`;

  let array = [];
  for (let seek = 0; seek < visibleContent.children.length; seek++) {
    array.push(visibleTab.children[seek].classList.contains("visible"));
  }

  VisibleInitialize(lastIndex, array);
});

document.querySelector("[data-openNewTab]").click();
