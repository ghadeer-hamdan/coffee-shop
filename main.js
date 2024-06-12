//Swiper JS 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 40,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});

 let menu = document.querySelector('.menu-icon');
 let navbar = document.querySelector('.navbar');
  menu.onclick = () => {
      menu.classList.toggle("move");
      navbar.classList.toggle("open-menu");
  }; 
  
  window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

//scrollreveal Animation
const Animation = ScrollReveal(
  {
    origin:"top",
    distance:"60px",
    duration:"2500",
    delay:'400',
  }
);
Animation.reveal(".nav");
Animation.reveal(".home-text",{origin:"left"});
Animation.reveal(".img",{origin:"right"});
Animation.reveal(".ser-box ,.pro-box ,.team-box , .book-data ",{interval:100});