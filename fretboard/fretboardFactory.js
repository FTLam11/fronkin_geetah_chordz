var fretboard = angular.module('geetah');

fretboard.factory('Fretboard', function() {
  var Fretboard = function(tuningNotesArr) {
  this.notes = this.populateNotes(tuningNotesArr);
  this.colorIntervals = this.colorIntervals;
  };

  Fretboard.prototype.populateNotes = function(tuningNotesArr) {
    var strings = [[],[],[],[],[],[]];
    var currentNoteIndex = 0;
    var currentTuningNoteIndex = 0;

    for (var string = 0; string < 6; string++) {
      currentNoteIndex = SCALE.indexOf(tuningNotesArr[currentTuningNoteIndex]) + 1;
      for (var fret = 0; fret < 12; fret++) {
        strings[string][fret] = SCALE[currentNoteIndex];
        if (currentNoteIndex == 11) {
          currentNoteIndex = 0;
        } else {
          currentNoteIndex++;
        };
      };
      currentTuningNoteIndex++;
    };

    return strings;
  };

  Fretboard.prototype.colorIntervals = function(note, noteIntervalMapping) {
    interval = Fretboard.prototype.intervalQuery(note, noteIntervalMapping)
    return COLOR_INTERVALS[interval];
  };

  Fretboard.prototype.intervalQuery = function(note, noteIntervalMapping) {
    for (var key in noteIntervalMapping) {
      if (noteIntervalMapping[key] == note) {
        return key;
      };
    };
  };
  
  const COLOR_INTERVALS = {
    "1": "#d10000",
    "b2": "#FFFDE7",
    "2": "#ff6622",
    "b3": "#E5E4D0",
    "3": "#ffda21",
    "4": "#33dd00",
    "b5": "#BFBEAD",
    "5": "#1133cc",
    "#5": "#BAB9A9",
    "6": "#220066",
    "b7": "#7F7F74",
    "7": "#330044"
  };

  const SCALE = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

  return Fretboard;
});