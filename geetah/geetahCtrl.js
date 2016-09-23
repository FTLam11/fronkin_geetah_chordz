var geetah = angular.module('geetah');

geetah.filter('reverse', function() {
  return function(notes) {
    return notes.slice().reverse();
  };
});

geetah.controller('GeetahCtrl', ['$scope', 'Tuning', 'Fretboard', function($scope, Tuning, Fretboard) {
  var algernon = new Tuning('DAEAC#E', 'D');
  var fretboard = new Fretboard(algernon.notes);

  $scope.colorMe = fretboard.intervalQuery;
  $scope.intervals = algernon.intervals;
  $scope.openNotes = algernon.notes;
  $scope.root = '';
  $scope.chord = '';
  $scope.firstString = fretboard.notes[0];
  $scope.secondString = "";
  $scope.thirdString = "";
  $scope.fourthString = "";
  $scope.fifthString = "";
  $scope.sixthString = "";
}]);

// color code the notes 1..7 ROYGBIV
// make a collection of objects with the interval, note, and color (ng-style)
// draw -> clear -> draw
// [{note: "E", interval: 1, color: "#ASDFEF"}]