angular
  .module('farmApp')
  .directive('animationsDir', function(){
      return{
      link:function(scope, element, attrs){
          $('.ham').click(function(){
          $('.mobile-nav').toggle();
          })
          $('.partial-nav').click(function(){
            $('.partial-menu').toggle();
          })
          $('.mobile-partial-nav').click(function(){
            $('.partial-menu').toggle();
          })
          $('.box').click(function () {
            // $('.box').css("visibility", "hidden");
            $('.box').fadeOut(800),
            // $('.information-container').css("display", "block")
            $('.information-container').fadeIn(800),
            $('.dummy').fadeIn(800),
            $('.chubby-header').fadeOut(800)
          })
          //  THE FUNCTION BELOW DOESNT WORK...
          // $(".mobile-partial-nav").click(function(){
          //     $(this).css("background-color", "#BD573F");
          // }, function(){
          //     $(this).css("background-color", "#276998")
          // })
          $(function(){
            $('.email-string').typed({
              strings: ['contact@rileysFarmFresh.com'],
              typeSpeed: 3,
              showCursor: false
            })
          })
            // $(window).scroll(function(){
            // $('.jordan').css("filter: grayscale", 100 - $(window).scrollTop() / 1100);
            // $('.alan').css("opacity", -1 + $(window).scrollTop() / 1200)
            // });
      }
  }
  })
