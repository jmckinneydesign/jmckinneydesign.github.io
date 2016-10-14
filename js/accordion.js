$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  if ( $(this).parent().hasClass('is-expanded') ) {
      $('#arrow').addClass('arrow-animation').html('arrow_drop_up');
    } else{
      $('#arrow').removeClass('arrow-animation').html('arrow_drop_down');
    }
  e.preventDefault();
});
