angular
  .module('farmApp')
  .controller('farmCtrl', function($scope, $state, farmSrvc){

    $scope.getAllProducts = function(){
      farmSrvc.getAllProducts().then(function(response){
        $scope.order = {products: response}
      })
    }
    $scope.getAllProducts();

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

    $scope.deleteProduct = function(product){
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

// BEGIN INVOICE FUNCTIONALITY
    $scope.postUser = function(user) {
      console.log(user);
      farmSrvc.postOrder(user).then(function(res){
        alert('new user created :)')
        // location.reload();
      })
    }
    $scope.postOrder = function(order) {
      farmSrvc.postOrder(order).then(function(res){
        alert('new order created :)')
        // location.reload();
      })
    }
    // $scope.getAllInvoices = function(){
    //   farmSrvc.getAllInvoices().then(function(response){
    //     console.log(response);
    //     $scope.invoices = response;
    //   })
    // }
    // $scope.getAllInvoices();
    $scope.getAllInvoices = function(){
      farmSrvc.getAllInvoices().then(function(response){
        console.log(response);
        $scope.allInvoices = response;

        $scope.invoices = {};
        for(var i = 0; i < response.length; i++){
          if(!$scope.invoices.hasOwnProperty(response[i].id)){
            $scope.invoices[response[i].id] = [{
              // client:
              quantity: response[i].quantity,
              product: response[i].product,
              unit: response[i].unit,
              price: response[i].price,
              notes: response[i].notes
            }];
          }
          else {
            $scope.invoices[response[i].id].push({
              quantity: response[i].quantity,
              product: response[i].product,
              unit: response[i].unit,
              price: response[i].price,
              notes: response[i].notes
            })
          }
        }
        console.log($scope.invoices);
      })
    }
    $scope.getAllInvoices();

//  END INVOICE FUNCTIONALITY

    $scope.getAllNotes = function(){
      farmSrvc.getAllNotes().then(function(response){
        $scope.notes = response;
      })
    }
    $scope.getAllNotes();

    $scope.postNote = function(note) {
      farmSrvc.postNote(note).then(function(res){
        alert('new personal created :)')
        location.reload();
      })
    }
    $scope.deleteNote = function(note){
      farmSrvc.deleteNote(note).then(function(res){
        alert('item deleted!');
        location.reload();
      })
    }


  })
