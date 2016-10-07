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

geetah.controller('GeetahCtrl', ['$scope', 'Tuning', 'Fretboard', 'GeetahFactory', 'Chord', function($scope, Tuning, Fretboard, GeetahFactory, Chord) {
  $scope.tuningRoot = "A";
  $scope.tuningRoots =  GeetahFactory.tuningRoots;
  $scope.chordTypes = GeetahFactory.chordTypes;
  $scope.chordRoot = "A";
  $scope.chordRoots = $scope.tuningRoots.slice();

  $scope.tuneItUp = function() {
    $scope.tuning = new Tuning($scope.tuningForm, $scope.tuningRoot);
    $scope.fretboard = new Fretboard($scope.tuning.notes, $scope.tuning.intervals);
    $scope.openNotes = $scope.tuning.notes;
    $scope.firstString = $scope.fretboard.notes[0];
    $scope.secondString = $scope.fretboard.notes[1];
    $scope.thirdString = $scope.fretboard.notes[2];
    $scope.fourthString = $scope.fretboard.notes[3];
    $scope.fifthString = $scope.fretboard.notes[4];
    $scope.sixthString = $scope.fretboard.notes[5];
  };

  $scope.showInterval = function(note) {
    if (note.showInterval == true) {
      return note.interval;
    } else {
      return note.note;
    };
  };

  $scope.showChord = function(chordType) {
    var chord = new Chord($scope.chordRoot, chordType);
    var chordNotes = chord.notes;
    /*
      1. Give root and type
      2. Use chord formula to return intervals
      3. Translate each interval to a note, include equivalent intervals
      4. Iterate through $scope.fretboard.notes to highlight notes of the chord
    */
  };

  $scope.setChordRoot = function(chordRoot) {
    $scope.chordRoot = chordRoot;
  };
}]);

// use divs/anchors for each chord, chord notes are shown using squares z index