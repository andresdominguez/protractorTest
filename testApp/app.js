var app = angular.module('SampleApp', []);

app.controller('SampleCtrl', function($scope, $http) {
  $http({method: 'GET', url: '/message'}).success(function(data) {
    $scope.serverMessage = data;
  })
});