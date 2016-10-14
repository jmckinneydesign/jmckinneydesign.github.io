//animation for the site

//1. click togle menu
$(document).ready(function(){
  $("#toggle").click(function(){
3
    $("#mainNav").slideToggle(300);
    $(".hamburger").toggleClass("is-active");
4
  });//end toggle menu

  $('.your-class').slick({
      accessibility: true,
      touchMove: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true,
      cssEase: 'linear',
      centerMode: true,
      adaptiveHeight: true,
      arrows: true
  });//end slick

});

$(window).resize(function(){
    if($(window).width()>= 768){
        $('#mainNav').css('display','block');
    }
    // else{
    //     $('#mainNav').css('display','none');
    // }
});
