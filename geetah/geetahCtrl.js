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
  $scope.secondString = fretboard.notes[1];
  $scope.thirdString = fretboard.notes[2];
  $scope.fourthString = fretboard.notes[3];
  $scope.fifthString = fretboard.notes[4];
  $scope.sixthString = fretboard.notes[5];
}]);

// color code the notes 1..7 ROYGBIV
// make a collection of objects with the interval, note, and color (ng-style)
// draw -> clear -> draw
// [{note: "E", interval: 1, color: "#ASDFEF"}]
// show note or interval, hover over shows the other