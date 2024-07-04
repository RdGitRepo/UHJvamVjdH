const backtotop = document.querySelector(".backtotop");

function scrollTop(){
    window.scrollTo(0,0)
}
backtotop.removeEventListener("click", scrollTop)
backtotop.addEventListener("click", scrollTop)

const boxleft = document.querySelector(".boxleft");
const boxright = document.querySelector(".boxright");
const imagesliderbar = document.querySelector(".imagesliderbar");
const scrollWidth = imagesliderbar.firstElementChild.clientWidth;

function scrollLeft(){
    if(imagesliderbar.scrollLeft % scrollWidth <= 5){
        imagesliderbar.classList.toggle("scroll", imagesliderbar.scrollLeft !== 0)
        if(imagesliderbar.scrollLeft === 0){
            imagesliderbar.scrollTo(imagesliderbar.scrollWidth - scrollWidth *2,0)
        }else{
            imagesliderbar.scrollBy(-scrollWidth, 0)
        }
    }
}
function scrollRight(){
    if(imagesliderbar.scrollLeft % scrollWidth <= 5){
        imagesliderbar.classList.toggle("scroll", imagesliderbar.scrollLeft !== 7400)
        if(imagesliderbar.scrollLeft === 7400){
            imagesliderbar.scrollTo(scrollWidth,0)
        }else{
            imagesliderbar.scrollBy(scrollWidth, 0)
        }
    }
}

boxleft.addEventListener("click", scrollLeft)
boxright.addEventListener("click", scrollRight)