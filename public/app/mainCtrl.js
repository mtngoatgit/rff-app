angular
  .module('farmApp')
  .controller('farmCtrl', function($scope, $state, farmSrvc){

    $scope.getAllProducts = function(){
      farmSrvc.getAllProducts().then(function(response){
        $scope.products = response;
      })
    }
    $scope.getAllProducts();


    $scope.getAllMarkets = function() {
      farmSrvc.getAllMarkets().then(function(response){
        $scope.markets = response;
      })
    }
    $scope.getAllMarkets();


    $scope.postMarket = function(market) {
      farmSrvc.postMarket(market).then(function(res){
        alert('new market created :)')
        location.reload();
      })
    }


    $scope.postProduct = function(product) {
      farmSrvc.postProduct(product).then(function(res){
        alert('new product created :)')
        location.reload();
      })
    }


  })
