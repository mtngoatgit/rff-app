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

    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(response){
        return response.data;
      })
    }

    this.getAllMarkets = function(){
      return $http({
        method: 'GET',
        url: '/markets'
      }).then(function(response){
        return response.data;
      })
    }

    this.getAllNotes = function(){
      return $http({
        method: 'GET',
        url: '/notes'
      }).then(function(response){
        return response.data;
      })
    }

    this.getAllInvoices = function(){
      return $http({
        method: 'GET',
        url: '/invoices'
      }).then(function(response){
        console.log("my invoice data in the service", response.data);
        return response.data;
      })
    }

    this.postMarket = function(market) {
      return $http.post('/markets', market).then(function(response){
        return response.data
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

    this.deleteMarket = function(market){
      return $http.delete('/markets/' + market).then(function(response){
        return response.data
      })
    }

    this.deleteInvoice = function(invoice){
      // console.log(invoice);
      return $http.delete('/invoices/' + invoice).then(function(response){
        return response.data
      })
    }

//  BEGIN INVOICE FUNCTIONALITY
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
  // END INVOICE FUNCTIONALITY

// NOTES
    this.postNote = function(note) {
      // console.log(note);
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

  })//end of service
