angular.module('farmApp', ['ui.router', 'ngAnimate', 'ngDialog'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url:'/',
                // controller: "",
                templateUrl: "app/views/home.html"
                })
            .state('login', {
                url:"/login",
                // controller: "dialogCtrl",
                templateUrl: "app/views/login.html"
            })
            .state('about', {
                url:"/about",
                templateUrl: "app/views/about.html"
            })
            .state('office-delivery', {
                url:"/office-delivery",
                templateUrl: "app/views/office-delivery.html"
            })
            .state('locations', {
                url:"/locations",
                controller: "farmCtrl",
                templateUrl: "app/views/locations.html"
            })
            .state('contact', {
                url:"/contact",
                // controller: "",
                templateUrl: "app/views/contact.html"
            })
            .state('wholesale', {
                url:"/wholesale",
                controller: "farmCtrl",
                templateUrl: "app/views/wholesale.html"
            })
            .state('admin', {
                url:"/admin",
                controller: "farmCtrl",
                templateUrl: "app/views/admin.html",
                // resolve: {
                //   user: function($state, farmSrvc) {
                //       return farmSrvc.checkAuth()
                //       .then(function (response) {
                //         console.log(response);
                //         if (response === 'unauthorized') {
                //           $state.go('home');
                //           alert('Sign in');
                //         }
                //         else {
                //           return response;
                //         }
                //       });
                //     }
                // }
            })
            .state('orders', {
              url:"/orders",
              templateUrl: "app/views/orders.html"
            })



    })//end of config
