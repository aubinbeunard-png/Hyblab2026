"use strict";

// Create Empty Slide
createEmptyContent();

// Init of the (touch friendly) Swiper slider
const swiper = new Swiper("#mySwiper", {
  direction: "vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper.on("slideChange", function () {
  console.log(swiper.activeIndex)
  let nbSlide = swiper.slides.length;
  let index = swiper.activeIndex;
  if (index == 0){
    initSlide1();
  }
  else if (index == nbSlide-1){
    initSlide2();
  }
  else{
    initContentSlide()
  }
});

// Wait for the content to preload and display 1st slide
// Here we simulate a loading time of one second
setTimeout(() => { 
  // fade out the loader "slide"
  // and send it to the back (z-index = -1)
  anime({
    delay: 100,
    targets: '#loader',
    opacity: '0',
    'z-index' : -1,
    easing: 'easeOutQuad',
  });
  // Init first slide
  initSlide1();
}, 1000);