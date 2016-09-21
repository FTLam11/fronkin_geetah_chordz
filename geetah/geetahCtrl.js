var geetah = angular.module('geetah');

geetah.filter('reverse', function() {
  return function(notes) {
    return notes.slice().reverse();
  };
});

geetah.controller('GeetahCtrl', ['$scope', 'Tuning', function($scope, Tuning) {
  var algernon = new Tuning('DAEAC#E', 'D');
  $scope.intervals = algernon.intervals;
  $scope.openNotes = algernon.notes;
  $scope.root = '';
  $scope.chord = '';
}]);

// color code the notes 1..7 ROYGBIV
// make a collection of objects with the interval, note, and color (ng-style)
// draw -> clear -> draw