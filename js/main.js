const responsive = {
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
}

$(document).ready(function() {
  // owl-carousel
  $('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  margin:10,
  responsiveClass:true,
  responsive: responsive
  });

  $('.trigger').hover(function(){
    $(".myShow").toggle();
  });


  //animation AOS
  AOS.init();
});
