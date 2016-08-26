angular
  .module('farmApp')
  .directive('loginDir', function(){
      return{
      link:function(scope, element, attrs){
          var huh = "huh?"
          var lock = new Auth0Lock('lbQWuzyjwASNOK8l47WoN49Ds2wRye9X', 'buzzard.auth0.com', {
            auth: {
              redirectUrl: 'http://localhost:3000/#/a890d763124masdcxcivsdfsdkjn',
              responseType: 'code',
              params: {
                scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
              }
            }
          });
          console.log(lock);
          $('#auth-login').click(function(){lock.show()});
          $('#something').click(function(){console.log('hi')});
    }

  }
  })
