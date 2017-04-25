'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$location',function($scope,$location) {

  $scope.nombreBoton = "Cambiar Pagina";

    $scope.cambiarPagina = function (){
      $location.path ('/view2')
    }

}]);