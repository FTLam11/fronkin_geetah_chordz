var geetah = angular.module('geetah');

geetah.filter('reverse', function() {
  return function(notes) {
    return notes.slice().reverse();
  };
});

geetah.controller('GeetahCtrl', ['$scope', 'Tuning', function($scope, Tuning) {
  var algernon = new Tuning('DAEAC#E', 'D');
  $scope.openNotes = algernon.notes;
  $scope.root = '';
  $scope.chord = '';
}]);

// color code the notes 1..7 ROYGBIV