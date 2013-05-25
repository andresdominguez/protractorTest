var app = angular.module('SampleApp', []);

app.config(function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'SampleCtrl'
      })
      .when('/other-view', {
        templateUrl: 'other.html',
        controller: 'OtherCtrl'
      })
});

app.controller('SampleCtrl', function($scope, $http) {
  $scope.andres = 'hey';

  $http({method: 'GET', url: '/message'}).success(function(data) {
    $scope.serverMessage = data;
  });

  $scope.showMeMessage = function() {
    $scope.message = 'Greetings';
  };
});

app.controller('OtherCtrl', function($scope) {
  $scope.msg = 'The other view';
});