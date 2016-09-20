angular
  .module('farmApp')
  .directive('animationsDir', function(){
      return{
      link:function(scope, element, attrs){
          $('.ham').click(function(){
          $('.mobile-nav').slideToggle();
          })
          $('.partial-nav').click(function(){
            console.log('hit');
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

          $(function(){
            $('.email-string').typed({
              strings: ['contact@rileysFarmFresh.com'],
              typeSpeed: 3,
              showCursor: false,
              startDelay: 900
            })
          })
            // $(window).scroll(function(){
            // $('.jordan').css("filter: grayscale", 100 - $(window).scrollTop() / 1100);
            // $('.alan').css("opacity", -1 + $(window).scrollTop() / 1200)
            // });
      }
  }
  })
