var geetah = angular.module('geetah')

geetah.factory('GeetahFactory', function() {
  var o = {};
  o.tuningRoots = ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab"];
  o.chordTypes = ['5', '6', '7', '9', 'maj', '6/9', 'maj7', 'maj9', 'maj11', 'maj13', 'add9', 'min', 'min6', 'min7', 'minadd9', 'min6/9', 'min9', 'min11', 'min13', '7#5', '7b5', '7#9', '7b9', 'dim', 'dim7', 'aug', 'aug7', 'sus2', 'sus4', '7sus4', '9sus4'];
  return o;
});