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
  $scope.root = "A";
  $scope.roots = ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab"];

  $scope.tuneItUp = function() {
    $scope.tuning = new Tuning($scope.tuningForm, $scope.root);
    $scope.fretboard = new Fretboard($scope.tuning.notes, $scope.tuning.intervals);
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

  $scope.chords = ['maj7', 'min9'];
  $scope.showChord = function() {
    console.log("hello");
  }
}]);

// [{note: "E", interval: 1, color: "#ASDFEF"}]
// show note or interval, hover over shows the other
// use divs/anchors for each chord, chord notes are shown using squares z index