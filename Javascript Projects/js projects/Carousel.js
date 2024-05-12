"use strict";
const buttons = document.querySelectorAll("[data-carouselbutton]");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const offset = button.dataset.carouselbutton === "next"? 1 : -1;
        const slideContainer = button.closest("[data-carouselContainer]").querySelector("[data-slideContainer]")
        const activeSlide = slideContainer.querySelector("[data-active]");

        let newIndex = [...slideContainer.children].indexOf(activeSlide) + offset

        if(newIndex >= slideContainer.children.length - 1) newIndex = 0
        if(newIndex < 0) newIndex = slideContainer.children.length - 1

        slideContainer.children[newIndex].dataset.active = true ;
        delete activeSlide.dataset.active


    })
})

