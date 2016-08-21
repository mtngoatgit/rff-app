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
      console.log(product);
      farmSrvc.postProduct(product).then(function(res){
        alert('new product created :)')
        location.reload();
      })
    }

    $scope.deleteProduct = function(product){
      console.log(product)
      farmSrvc.deleteProduct(product).then(function(res){
        alert('item deleted!');
        location.reload();
      })
    }

    $scope.deleteMarket = function(market){
      console.log(market)
      farmSrvc.deleteMarket(market).then(function(res){
        alert('item deleted!');
        location.reload();
      })
    }

    $scope.postOrder = function(order) {
      console.log("this is what it looks like in control", order);
      farmSrvc.postOrder(order).then(function(res){
        alert('new order created :)')
        // location.reload();
      })
    }

    $scope.getAllNotes = function(){
      farmSrvc.getAllNotes().then(function(response){
        $scope.notes = response;
      })
    }
    $scope.getAllNotes();

    $scope.postNote = function(note) {
      console.log(note);
      farmSrvc.postNote(note).then(function(res){
        alert('new personal created :)')
        location.reload();
      })
    }


  })
