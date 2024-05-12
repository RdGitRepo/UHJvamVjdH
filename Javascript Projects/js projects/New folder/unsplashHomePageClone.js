import { column1 , column2 , column3 } from "./gridImageIds.js";

console.log(column1);

const sidebarBtn = document.querySelector(".sidebarToggle");
const sidebar = document.querySelector(".sidebar");
const sidebarBody = document.querySelector(".sidebarBody");
const sidebarFooter = document.querySelector(".sidebarFooter");
const contentFilter = document.querySelector(".contentFilter");

function customHook(element,btn){
    window.addEventListener("click", offsetHandler);
    function offsetHandler(e) {
      const elementDimentions = element.getBoundingClientRect();
      if (
        e.clientY < elementDimentions.top ||
        e.clientX < elementDimentions.left ||
        e.clientY > elementDimentions.bottom ||
        e.clientX > elementDimentions.right
      ) {
        const btnDimentions = btn.getBoundingClientRect();
        if (
          e.clientY > btnDimentions.top &&
          e.clientX > btnDimentions.left &&
          e.clientY < btnDimentions.bottom &&
          e.clientX < btnDimentions.right
        ) {
          console.log("click")
        } else if (!element.classList.contains("hide")) {
          btn.click();
        }
      }
    }
}


sidebarBtn.addEventListener("click",sidebarHandler);
function sidebarHandler(){
    // sidebar.classList.toggle("hide");
    // customHook(sidebar,sidebarBtn);
    if(document.querySelector(".langContainer")){
        const langContainer = document.querySelector(".langContainer");
        if(!langContainer.classList.contains("hide")){
            langContainer.classList.add("hide");
        }
    }
}

let expandHandlers = [];
let isBelow1000 = false;
const legal = document.querySelector(".legal");
const copyFooter = document.querySelector(".copyFooter");
const initialFooter = document.querySelector(".initialFooter");
window.addEventListener("resize",resizeHandler);
function resizeHandler(){
    Below1000();
    Above1000();
    below700();
    above700();
}

function selectLangShow(){
    if(document.querySelector(".footerLinks.btn")){
        const showLangBtn = document.querySelector(".footerLinks.btn");
        showLangBtn.addEventListener("click",showLanguage);
        function showLanguage(){
            showLangBtn.nextElementSibling.classList.toggle("hide");
        }
    }
}

window.addEventListener("load",loadHandler);
function loadHandler(){
    sidebarFooter.append(initialFooter.content.cloneNode(true));
    Above1000();
    Below1000();
    selectLangShow();
}

function Below1000(){

    if (window.innerWidth < 1050 && !isBelow1000) {
        isBelow1000 = true;
        sidebarBody.append(legal.content.cloneNode(true));
        sidebarFooter.innerHTML = "";
        sidebarFooter.append(copyFooter.content.cloneNode(true));
        const icon = document.createElement("i");
        icon.classList.add("material-icons");
        icon.innerText = "expand_more";
        accordionSidebar(icon);
        filterRowBelow();
    }
    
}

function accordionSidebar(icon){
    document.querySelectorAll(".header").forEach((head, index, array) =>{
        head.append(icon.cloneNode(true));
        head.nextElementSibling.style.height = "0px";
        head.addEventListener("click",expandHandler);
        function expandHandler(){
            for(let x = 0; x < array.length; x++){
                array[x].nextElementSibling.style.height = "0px";
                array[x].lastElementChild.style.rotate = "0deg";
                if(!(index == x)){
                    array[x].nextElementSibling.classList.remove("expand");
                }
            }
            let scrollHeight = array[index].nextElementSibling.scrollHeight;
            array[index].nextElementSibling.classList.toggle("expand");
            if(array[index].nextElementSibling.classList.contains("expand")){
                array[index].lastElementChild.style.rotate = "180deg";
                array[index].nextElementSibling.style.height = scrollHeight + "px";
            }
        }
        expandHandlers.push(expandHandler);
    })
}

function Above1000(){
    
    if(window.innerWidth > 1050 && isBelow1000){
        isBelow1000 = false;
        sidebarFooter.innerHTML = "";
        sidebarFooter.append(initialFooter.content.cloneNode(true));
        filterRowAbove();

        document.querySelectorAll(".sidebarLinks").forEach((sidebarLinks,index) =>{
            sidebarLinks.previousElementSibling.lastElementChild.remove();
            sidebarLinks.classList.remove("expand");
            sidebarLinks.style.height = "initial";
            sidebarLinks.previousElementSibling.removeEventListener("click",expandHandlers[index]);

        })

        expandHandlers = [];

        if(sidebarBody.lastElementChild.classList.contains("item6")){
            sidebarBody.lastElementChild.remove();
            sidebarBody.lastElementChild.remove();
        }

        selectLangShow();
    }
}

function filterRowBelow(){
    $(document).ready(function(){
        $(".visible").unwrap();
        $(".contentFilter > .container").wrapAll("<div style='display:none;'></div>");
    })
}

function filterRowAbove(){
    $(document).ready(function(){
        $(".container").unwrap();
        $(".visible").wrap("<div style='display:none;'></div>");
    })
}

const filterBtn = document.querySelectorAll(".filterBtn");
console.log(filterBtn)
filterBtn.forEach((btn, i) => {
  btn.addEventListener("click", filterHandler);
  function filterHandler() {
    for(let x = 0; x < filterBtn.length; x++){
        (x == i)? null : filterBtn[x].nextElementSibling.classList.add("hide");
    }
    btn.nextElementSibling.classList.toggle("hide");
    customHook(btn.nextElementSibling,btn);
  }
});

const modal = document.querySelector("[data-modal]");
const openModal = document.querySelector("[data-openModal]");
openModal.addEventListener("click", open);
function open() {
  modal.showModal();
}

const nav = document.querySelector("[data-nav]");
const contentBefore = document.querySelector(".before");
const contentAfter = document.querySelector(".after");
const scrollDiv = document.querySelector(".scroll");

contentAfter.addEventListener("click", scrollOffsetNX);
contentBefore.addEventListener("click", scrollOffsetPX);

function scrollOffsetNX(){
    nav.scrollBy(300,0)
    scrollDiv.classList.remove("backward");
    const difference = nav.scrollWidth - nav.clientWidth;
    const finalOffset = difference - 300;
    if(nav.scrollLeft > finalOffset){
        scrollDiv.classList.add("forward");
    }
}
function scrollOffsetPX(){
    nav.scrollBy(-300,0)
    scrollDiv.classList.remove("forward");
    if(nav.scrollLeft <= 300){
        scrollDiv.classList.add("backward");
    }
}



const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");
const gridItem = document.querySelector(".gridItem");

for(let x = 0; x < 7; x++){
    col1.append(gridItem.content.cloneNode(true));
    col2.append(gridItem.content.cloneNode(true));
    col3.append(gridItem.content.cloneNode(true));
}
    col2.lastElementChild.style.display = "none";

    let col1Image , col2Image , col3Image;

    function updateElement(){
        col1Image = document.querySelectorAll(".col1 .image");
        col2Image = document.querySelectorAll(".col2 .image");
        col3Image = document.querySelectorAll(".col3 .image");
    }
    updateElement();

function customImageIterator(element,iterator,start){
    element.forEach((img , i) =>{
        if(i >= start){
            img.children[0].children[0].setAttribute("src",`https://source.unsplash.com/${iterator[i][0]}`);
            img.parentElement.nextElementSibling.children[0].innerText = iterator[i][1][0];
            img.parentElement.nextElementSibling.children[1].innerText = iterator[i][1][1];
            img.parentElement.nextElementSibling.children[2].innerText = iterator[i][1][2];
        }
    })
}

customImageIterator(col1Image,column1,0);
customImageIterator(col2Image,column2,0);
customImageIterator(col3Image,column3,0);


const contentFooter = document.querySelector(".contentFooter");

contentFooter.addEventListener("click",loadMore);
let n = 0;
function loadMore(){
    for(let y = 0; y < 7; y++){
        col1.append(gridItem.content.cloneNode(true));
        col2.append(gridItem.content.cloneNode(true));
        col3.append(gridItem.content.cloneNode(true));
    }

    updateElement();    
    n++;
    (n == 1)? col2.children[6].removeAttribute("style") : null;
    col3.children[13].style.display = (n == 1)? "none" : null;
    if(col3.children[19]){
        col3.children[19].style.display = (n == 2)? "none" : null;
        col3.children[20].style.display = (n == 2)? "none" : null;
    }
    if(col3.children[27]){
        (n == 3)? col1.append(col3.children[27]) : null ;
    }

    const above = 7 * n;

customImageIterator(col1Image,column1,above);
customImageIterator(col2Image,column2,above);
customImageIterator(col3Image,column3,above);

(n == 3)? contentFooter.removeEventListener("click",loadMore) : null ;
    
}

let ans = false;
function below700(){
    if(window.innerWidth < 701 && ans == false){
        ans = true;
        const beBody = document.querySelector(".contentBody");
        beBody.classList.add("makeFlex");
    }
}
function above700(){
    if(window.innerWidth > 701 && ans == true){
        ans = false;
        const abBody = document.querySelector(".contentBody");
        abBody.classList.remove("makeFlex");
    }
}

const testSubject = "testSubject";

console.log(`%c Console styling %c${testSubject}`, `font-size:1.5em;`, `font-size:1.5em; color:red;`);

