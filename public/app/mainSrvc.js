angular
  .module('farmApp')
  .service('farmSrvc', function($http){

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

    this.postMarket = function(market) {
      return $http.post('/markets', market).then(function(response){
        return response.data
      })
    }

    this.postProduct = function(product) {
      console.log(product);
      return $http.post('/products', product).then(function(response){
        return response.data
      })
    }

    this.deleteProduct = function(product){
      console.log(product);
      return $http.delete('/products/' + product).then(function(response){
        return response.data
      })
    }

    this.deleteMarket = function(market){
      return $http.delete('/markets/' + market).then(function(response){
        return response.data
      })
    }

    this.postOrder = function(order) {
      console.log(order);
      return $http.post('/orders', order).then(function(response){
        return response.data
      })
    }

    this.postNote = function(note) {
      console.log(note);
      return $http.post('/notes', note).then(function(response){
        return response.data
      })
    }

  })//end of service
