var geetah = angular.module('geetah');

geetah.controller('GeetahCtrl', ['$scope', 'Tuning', function($scope, Tuning) {
  console.log("Hi");
  var standard = new Tuning('EADGBE', 'E');
  $scope.tuning = standard.intervals;
  $scope.root = '';
  $scope.chord = '';
}]);