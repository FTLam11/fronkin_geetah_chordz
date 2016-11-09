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
    $scope.currentChordType = chordType;
    $scope.tuneItUp();
    var chord = new Chord($scope.chordRoot, chordType);
    var chordNotes = chord.notes;

    for (var string = 0; string < $scope.fretboard.notes.length; string++) {
      for (var fret = 0; fret < $scope.fretboard.notes[string].length; fret++) {
        for (var interval = 0; interval < chordNotes.length; interval++) {
          if (chordNotes[interval].note.some(note => note == $scope.fretboard.notes[string][fret].note)) {
            $scope.fretboard.notes[string][fret].chordInterval = true;
          };
        };
      };
    };
  };

  $scope.setChordRoot = function(chordRoot) {
    $scope.currentChordRoot = chordRoot;
    $scope.chordRoot = chordRoot;
    $scope.currentChordType = null;
  };
}]);