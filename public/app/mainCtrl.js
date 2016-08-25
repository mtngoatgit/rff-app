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
        $state.reload();
      })
    }


    $scope.postProduct = function(product) {
      farmSrvc.postProduct(product).then(function(res){
        alert('new product created :)')
        $state.reload();
      })
    }

    $scope.deleteProduct = function(product){
      farmSrvc.deleteProduct(product).then(function(res){
        // alert('item deleted!');
        $state.reload();
      })
    }

    $scope.deleteMarket = function(market){
      console.log(market)
      farmSrvc.deleteMarket(market).then(function(res){
        // alert('item deleted!');
        $state.reload();
      })
    }

    $scope.deleteInvoice = function(invoice){
      console.log("delete in controller", invoice)
      farmSrvc.deleteInvoice(invoice).then(function(res){
        // alert('item deleted!');
        $state.reload();
        });
    }

// BEGIN INVOICE FUNCTIONALITY
    $scope.postUser = function(user) {
      // console.log(user);
      farmSrvc.postOrder(user).then(function(res){
        alert('new user created :)')
        // location.reload();
      })
    }
    $scope.postOrder = function(order) {
      farmSrvc.postOrder(order).then(function(res){
        alert('new order created!!!!!!');
        $state.reload();
      })
    }
    $scope.getAllInvoices = function(){
      farmSrvc.getAllInvoices().then(function(response){
        // console.log("invoice post", response);
        $scope.allInvoices = response;

        var arr = [];
        var obj = {};
        for (var i = 0; i < response.length; i++) {
        	if (response[i].id === obj.id) {
        		obj.lineItem.push({
        			quantity: response[i].quantity,
              		product: response[i].product,
              		unit: response[i].unit,
              		price: response[i].price,
              		notes: response[i].notes
        		});
        	}
        	else {
        		if (obj.id) { arr.push(obj); }
        		obj = {
        			id: response[i].id,
        			client: response[i].client,
        			lineItem: [{
        				quantity: response[i].quantity,
              			product: response[i].product,
              			unit: response[i].unit,
              			price: response[i].price,
              			notes: response[i].notes
        			}]
        		}
        	}
        }
        arr.push(obj);
        $scope.invoices = arr;
        // console.log("my controller for invoice", $scope.invoices);
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
        $state.reload();
      })
    }
    $scope.deleteNote = function(note){
      farmSrvc.deleteNote(note).then(function(res){
        alert('item deleted!');
        $state.reload();
      })
    }


  })
