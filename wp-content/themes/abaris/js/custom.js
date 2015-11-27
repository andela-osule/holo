jQuery(document).ready(function($){

  $('li.menu-item').each(
      function(index, value){
        if ($(value).hasClass('menu-item-has-children')){
          $(value).find('a').first().attr('href', '#');
         }
      }
    );
  

  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false
  });

  $('.flex-recent-posts').flexslider({
    animation: "slide",
    animationLoop: false,
    controlNav: false,
    itemWidth: 292,
    slideshow: false
    //itemMargin: 30
  });

  $('.main-navigation').slicknav({
    duration: 700
  });
  
     /* Get the window's width, and check whether it is narrower than 480 pixels */
   var windowWidth = $(window).width();

   if (windowWidth <= 480) {

   } else {
      $('#masthead').waypoint('sticky');
   }

});

