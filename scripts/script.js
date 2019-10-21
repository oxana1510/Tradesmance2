//mobail menu
$(document).ready(function() { 

      var slinky = $('.js-menu').slinky({
        title: true
      });  

      pull = $('#pull');
      menu = $('#js-menu');
      wrap = $('#wrap-menu');
      wrapfixed =  $('.wrap-fixed');
      cross = $('.cross');
      close = $('.close-menu');

      $(pull).on('click', function(e) {
        e.preventDefault();
        menu.animate({width:'toggle'}, 300);
        pull.css("display","none");
        wrap.addClass("wrap-fixed");
      });
      $(wrap).on('click', function(e) {
        e.preventDefault();
        setTimeout(function() {
        wrap.removeClass("wrap-fixed");
        }, 300); 
        menu.animate({width:'toggle'});
        pull.css("display","block");
      });

      $(cross).on('click', function(e) {
        e.preventDefault();
        setTimeout(function() {
        wrap.removeClass("wrap-fixed");
        }, 300); 
        menu.animate({width:'toggle'});
        pull.css("display","block");
      });  
});


 $(window).resize(function(){

  w = $(window).width();
  if(w > 768) {
    menu.attr('style', 'none');
    wrap.removeClass("wrap-fixed");
  } else {
     pull.css("display","block");
  }

});


//checkout form 

$("#check").on("click", function(){
      $(".check-hidden").toggleClass("check-open");
  });

//popup video
$(".js-video-button").modalVideo({
    youtube:{
      controls:0,
      nocookie: true
    }
  });


//tabs
$('#responsiveTabs').responsiveTabs({
    startCollapsed: 'accordion'
});  

 
//tabs Checkout
$('#tabsCheckout').responsiveTabs({
    startCollapsed: 'accordion'
});  

//open ul
$(".span-toggle").on("click", function(){
    $(".span").toggleClass("span-active");
});





//pagination
// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

var items = $(".reviews-list li");
  var numItems = items.length;
  var perPage = 5;

  items.slice(perPage).hide();

  $('#pagination-container').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });




