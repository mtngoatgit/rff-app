angular.module('farmApp', [])
.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoSection = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('wholesale');
      console.log("wtf is this doing?");
      // call $anchorScroll()
      $anchorScroll();
    };
  }]);
