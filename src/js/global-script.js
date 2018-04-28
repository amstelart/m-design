// Если на проекте jQuery
$( document ).ready(function() {
  // code
  $('#main-slider').sliderPro({
    width: '100%',
    height: 620,
    arrows: true,
    buttons: true,
    waitForLayers: true,
    autoplay: false,
    autoScaleLayers: false,
    breakpoints: {
      500: {
      }
    }
  });

  $('#review-carousel').owlCarousel({
    items: 1,
    loop:true,
    nav: true,
    smartSpeed: 700,
    margin:0
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
