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
