angular
  .module('farmApp')
  .service('farmSrvc', function($http){

    // this.checkAuth = function() {
    //   return $http({
    //     method: 'GET',
    //     url: '/checkAuth'
    //   }).then(function(response){
    //     return response.data;
    //   })
    // }
// ************  PRODUCTS
    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(response){
        return response.data;
      })
    }

    this.postProduct = function(product) {
      return $http.post('/products', product).then(function(response){
        return response.data
      })
    }

    this.deleteProduct = function(product){
      return $http.delete('/products/' + product).then(function(response){
        return response.data
      })
    }

// **************  MARKETS
    this.getAllMarkets = function(){
      return $http({
        method: 'GET',
        url: '/markets'
      }).then(function(response){
        return response.data;
      })
    }

    this.postMarket = function(market) {
      return $http.post('/markets', market).then(function(response){
        return response.data
      })
    }

    this.deleteMarket = function(market){
      return $http.delete('/markets/' + market).then(function(response){
        return response.data
      })
    }

// **************  WHOLESALE SUMMARY
    this.getWholesaleSummary = function(){
      return $http({
        method: 'GET',
        url: '/wholesale'
      }).then(function(response){
        console.log("fe service whole", response);
        return response.data;
      })
    }

    this.postWholesaleSummary = function(summary) {
      console.log('fe service wholesale post', summary);
      return $http.post('/wholesale', summary).then(function(response){
        return response.data
      })
    }

    this.putWholesaleSummary = function(summary) {
      console.log("PUT method in the Service", summary);
      return $http.put('/wholesale/' + summary).then(function(response){
        return response.data
      })
    }

    this.deleteWholesaleSummary = function(summary){
      console.log("wholesale front end service", summary);
      return $http.delete('/wholesale/' + summary).then(function(response){
        return response.data
      })
    }

// ***************  PERSONAL NOTES
    this.getAllNotes = function(){
      return $http({
        method: 'GET',
        url: '/notes'
      }).then(function(response){
        return response.data;
      })
    }
    this.postNote = function(note) {
      console.log("FE service note", note);
      return $http.post('/notes', note).then(function(response){
        return response.data
      })
    }

    this.deleteNote = function(note){
      // console.log(note);
      return $http.delete('/notes/' + note).then(function(response){
        return response.data
      })
    }

// **************  INVOICE
    this.postUser = function(user) {
      console.log("service, user with postUser", user);
      return $http.post('/users', user).then(function(response){
        return response.data
      })
    }
    this.postOrder = function(order) {
      console.log("what order looks like in service", order);
      return $http.post('/orders', order).then(function(response){
        return response.data
      })
    }

    this.getAllInvoices = function(){
      return $http({
        method: 'GET',
        url: '/invoices'
      }).then(function(response){
        return response.data;
      })
    }

    this.deleteInvoice = function(invoice){
      // console.log(invoice);
      return $http.delete('/invoices/' + invoice).then(function(response){
        return response.data
      })
    }

  })//end of service
