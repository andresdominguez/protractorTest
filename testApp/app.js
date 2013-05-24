var app = angular.module('SampleApp', []);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partial.html',
    controller: 'SampleCtrl'
  })
});

app.controller('SampleCtrl', function($scope, $http) {
  $scope.andres = 'hey';

  $http({method: 'GET', url: '/message'}).success(function(data) {
    $scope.serverMessage = data;
  })
});