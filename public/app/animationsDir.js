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
            $('.box').fadeOut(800);
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
              typeSpeed: 1,
              showCursor: false
            })
          })
      }
  }
  })
