 // open Weading Categories
// $(function() {
//   "use strict";

//Loader	
      $(function preloaderLoad() {
      if($('.preloader').length){
          $('.preloader').delay(300).fadeOut(300);
      }
      $(".preloader_disabler").on('click', function() {
          $("#preloader").hide();
      });
  });


// stickey nav
$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 50) {
    $('#navbar').addClass('sticky');
  } else {
    $('#navbar').removeClass('sticky');
  }
});
// Weading Categories
// $('.card-hide').hide();
// function card_open(id){
//     $('.card-hide').hide(1000);           
// $('#'+id).toggle(1000);
// }
// slick slider
$('.sliders').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//*********************Hotel info*********************
function message() {
  document.getElementById('view-contact').style.left = "-200%";
  document.getElementById('send-message').style.display = "block";

}
function contact() {
  document.getElementById('send-message').style.display = "none";
  document.getElementById('view-contact').style.left = "0";
}
//**************** */ gallary section******************
function portfolio() {
  document.getElementById('gal').style.display = "block";
  document.getElementById('album').style.display = "none"; 
  document.getElementById('video').style.display = "none";   
  document.getElementById('pfl-li').style.background = "#00aeaf";
  document.getElementById('alb-li').style.background = "none"; 
  document.getElementById('vid-li').style.background = "none"; 
   
}
function album() {
  document.getElementById('album').style.display = "block";
  document.getElementById('gal').style.display = "none";
  document.getElementById('video').style.display = "none";  
  document.getElementById('pfl-li').style.background = "none";
  document.getElementById('alb-li').style.background = "#00aeaf"; 
  document.getElementById('vid-li').style.background = "none"; 
 
}
function videos() {
  document.getElementById('video').style.display = "block"; 
  document.getElementById('album').style.display = "none";
  document.getElementById('gal').style.display = "none";
  document.getElementById('pfl-li').style.background = "none";
  document.getElementById('alb-li').style.background = "none"; 
  document.getElementById('vid-li').style.background = "#00aeaf"; 
   

}
// swiper js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
