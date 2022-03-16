$(document).ready(function(){
  let $btns = $('.project-area .button-group button');

  $btns.click(function(event){
    $('.project-area .button-group button').removeClass('active');
    event.target.classList.add('active');

    let selector = $(event.target).attr("data-filter");
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;
  })

  $('.project-area .button-group #btns')

  //animation AOS
  AOS.init();
});
