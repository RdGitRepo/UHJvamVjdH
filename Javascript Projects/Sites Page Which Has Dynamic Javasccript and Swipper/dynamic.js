const templateNav = document.querySelector('[data-navbar]');
const templateSwiper = document.querySelector('[data-swiper]');

const navbarInitialize = document.querySelector('[data-navbarInitialize]');
const swiperInitialize = document.querySelector('[data-swiperInitialize]');

navbarInitialize.style.cssText = 'font-size:1.5rem; font-family:Arial; font-weight:500; padding:1rem 1.5rem; border:none; box-shadow: 0 1px 3px #bfbfbf, 0 3px 6px #bfbfbf; margin:.5rem; border-radius:.8rem;'
swiperInitialize.style.cssText = 'font-size:1.5rem; font-family:Arial; font-weight:500; padding:1rem 1.5rem; border:none; box-shadow: 0 1px 3px #bfbfbf, 0 3px 6px #bfbfbf; margin:.5rem; border-radius:.8rem;'

navbarInitialize?.addEventListener('click', navInitialize);
swiperInitialize?.addEventListener('click', swipeInitialize);

const navGate = document.querySelector("#navGate");

function navInitialize(){
    navGate.prepend(templateNav.content.cloneNode(true));
    this.style.display = "none";
}
const swipperGate = document.querySelector("#swipperGate");
function swipeInitialize(){
    swipperGate.prepend(templateSwiper.content.cloneNode(true));
    this.style.display = "none";

    new Swiper(".swiper", {
        loop: true,
    
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

const col1 = document.querySelector("#col1");
const col2 = document.querySelector("#col2");
const col3 = document.querySelector("#col3");

const templateGallary = document.querySelector("[data-gallary]");
const element = templateGallary.content.querySelector('#imgContainer').children[0];
const gallaryInitialize = document.querySelector('[data-gallaryInitialize]');
gallaryInitialize.style.cssText = 'font-size:1.5rem; font-family:Arial; font-weight:500; padding:1rem 1.5rem; border:none; box-shadow: 0 1px 3px #bfbfbf, 0 3px 6px #bfbfbf; margin:.5rem; border-radius:.8rem;'

const load = document.querySelector("#load");
gallaryInitialize.addEventListener("click", galInitialize);
load.addEventListener("click", galInitialize);

const footer = document.querySelector("#footer");


function galInitialize(){
    for(let x = 0; x < 6; x++){
        element.setAttribute('src', `https://picsum.photos/400/${400 + x}`);
        col1.append(element.cloneNode(true));
    }
    for(let x = 0; x < 4; x++){
        element.setAttribute('src', `https://picsum.photos/400/${600 + x}`);
        col2.append(element.cloneNode(true));
    }
    for(let x = 0; x < 5; x++){
        element.setAttribute('src', `https://picsum.photos/400/${500 + x}`);
        col3.append(element.cloneNode(true));
    }
    load.style.display = "block";
    footer.style.display = 'flex';
    gallaryInitialize.style.display = "none";
}

