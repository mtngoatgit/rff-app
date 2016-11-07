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

    $scope.getWholesaleSummary = function() {
      farmSrvc.getWholesaleSummary().then(function(response){
        $scope.wholesaleSummary = response;
      })
    }
    $scope.getWholesaleSummary();


    $scope.postMarket = function(market) {
      farmSrvc.postMarket(market).then(function(res){
        alert('new market created :)')
        farmSrvc.getAllMarkets().then(function(response){
          $scope.markets = response;
        })
      })
    }


    $scope.postProduct = function(product) {
      farmSrvc.postProduct(product).then(function(res){
        alert('new product created :)')
        farmSrvc.getAllProducts().then(function(response){
          $scope.products = response;
        })
      })
    }

    $scope.postWholesaleSummary = function(summary) {
      farmSrvc.postProduct(summary).then(function(res){
        alert('new wholesale summary created :)')
        farmSrvc.getWholesaleSummary().then(function(response){
          $scope.wholesaleSummary = response;
        })
      })
    }

    $scope.deleteProduct = function(product){
      farmSrvc.deleteProduct(product).then(function(res){
        farmSrvc.getAllProducts().then(function(response){
          $scope.products = response;
        })
      })
    }

    $scope.deleteWholesaleSummary = function(summary){
      farmSrvc.deleteWholesaleSummary(summary).then(function(res){
        farmSrvc.getAllMarkets().then(function(response){
          $scope.wholesaleSummary = response;
        })
      })
    }

    $scope.deleteMarket = function(market){
      console.log(market)
      farmSrvc.deleteMarket(market).then(function(res){
        farmSrvc.getAllMarkets().then(function(response){
          $scope.markets = response;
        })
      })
    }

    $scope.deleteInvoice = function(invoice){
      console.log("delete in controller", invoice)
      farmSrvc.deleteInvoice(invoice).then(function(res){
        // alert('item deleted!');

        farmSrvc.getAllInvoices().then(function(response){
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
        });
    }

// BEGIN INVOICE FUNCTIONALITY
    $scope.postUser = function(user) {
      console.log("does user come through?", user);
      farmSrvc.postUser(user).then(function(res){
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
    // $scope.postUser = function(user) {
    //   console.log("does user come through?", user);
    //   farmSrvc.postUser(user).then(function(res){
    //     $scope.postOrder = function(order) {
    //       farmSrvc.postOrder(order).then(function(res){
    //         alert('new order created!!!!!!');
    //         $state.reload();
    //       })
    //     }
    //   })
    // }

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
              email: response[i].email,
              phone: response[i].phone,
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
        farmSrvc.getAllNotes().then(function(response){
          $scope.notes = response;
        })
      })
    }
    $scope.deleteNote = function(note){
      farmSrvc.deleteNote(note).then(function(res){
        alert('item deleted!');
        farmSrvc.getAllNotes().then(function(response){
          $scope.notes = response;
        })
      })
    }




  })
