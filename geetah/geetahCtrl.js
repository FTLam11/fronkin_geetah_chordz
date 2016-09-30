var geetah = angular.module('geetah');

geetah.filter('reverse', function() {
  return function(notes) {
    if (notes == undefined) {
      return;
    } else {
      return notes.slice().reverse();
    };
  };
});

geetah.controller('GeetahCtrl', ['$scope', 'Tuning', 'Fretboard', function($scope, Tuning, Fretboard) {
  $scope.tuneItUp = function() {
    $scope.tuning = new Tuning($scope.tuningForm, 'D');
    $scope.fretboard = new Fretboard($scope.tuning.notes);
    $scope.openNotes = $scope.tuning.notes;
    $scope.firstString = $scope.fretboard.notes[0];
    $scope.secondString = $scope.fretboard.notes[1];
    $scope.thirdString = $scope.fretboard.notes[2];
    $scope.fourthString = $scope.fretboard.notes[3];
    $scope.fifthString = $scope.fretboard.notes[4];
    $scope.sixthString = $scope.fretboard.notes[5];
    $scope.colorMe = $scope.fretboard.colorIntervals;
    $scope.intervals = $scope.tuning.intervals;
  };

  $scope.root = '';
  $scope.chord = '';
}]);

// color code the notes 1..7 ROYGBIV
// make a collection of objects with the interval, note, and color (ng-style)
// draw -> clear -> draw
// [{note: "E", interval: 1, color: "#ASDFEF"}]
// show note or interval, hover over shows the other