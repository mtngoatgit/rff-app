angular
  .module('farmApp')
  .controller('farmCtrl', function($scope, $state, farmSrvc){


// ************  PRODUCTS
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

    $scope.postProduct = function(product) {
      farmSrvc.postProduct(product).then(function(res){
        alert('new product created :)')
        farmSrvc.getAllProducts().then(function(response){
          $scope.products = response;
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


// **************  MARKETS
    $scope.getAllMarkets = function() {
      farmSrvc.getAllMarkets().then(function(response){
        $scope.markets = response;
      })
    }
    $scope.getAllMarkets();

    $scope.postMarket = function(market) {
      farmSrvc.postMarket(market).then(function(res){
        alert('new market created :)')
        farmSrvc.getAllMarkets().then(function(response){
          $scope.markets = response;
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


// **************  WHOLESALE SUMMARY
    $scope.getWholesaleSummary = function() {
      farmSrvc.getWholesaleSummary().then(function(response){
        console.log('fe ctrl wholesale', response);
        $scope.wholesaleSummary = response;
      })
    }
    $scope.getWholesaleSummary();

    $scope.postSummary = function(summary) {
      // console.log("fe ctrl wholesale post", summary);
      farmSrvc.postWholesaleSummary(summary).then(function(res){
        alert('new wholesale summary created :)')
        farmSrvc.getWholesaleSummary().then(function(response){
          $scope.wholesaleSummary = response;
        })
      })
    }

    $scope.putSummary = function(summary) {
      farmSrvc.putWholesaleSummary(summary).then(function(res){
        alert('dude, you actually updated this field 😳')
        farmSrvc.getWholesaleSummary().then(function(response){
          $scope.wholesaleSummary = response;
        })
      })
    }

    $scope.deleteWholesale = function(summary){
      console.log("delete Whole in FE CTRL", summary);
      farmSrvc.deleteWholesaleSummary(summary).then(function(res){
        farmSrvc.getWholesaleSummary().then(function(response){
          $scope.wholesaleSummary = response;
        })
      })
    }

// ***************  PERSONAL NOTES

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

// **************  INVOICE
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

    $scope.deleteInvoice = function(invoice){
      // console.log("delete in controller", invoice)
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



//  END INVOICE FUNCTIONALITY


  })
