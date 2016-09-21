var fretboard = angular.module('geetah');

fretboard.factory('Fretboard', function() {
  var Fretboard = function(tuningNotesArr, notesArr) {
  this.notes = this.populateNotes(tuningNotesArr, notesArr);
  };

  Fretboard.prototype.populateNotes = function(tuningNotesArr, notesArr) {
    var strings = [[],[],[],[],[],[]];
    var currentNoteIndex = 0;
    var currentTuningNoteIndex = 0;

    for (var string = 0; string < 6; string++) {
      currentNoteIndex = notesArr.indexOf(tuningNotesArr[currentTuningNoteIndex])
      for (var fret = 0; fret < 12; fret++) {
        strings[string][fret] = notesArr[currentNoteIndex];
        if (currentNoteIndex == 11) {
          currentNoteIndex = 0;
        } else {
          currentNoteIndex++;
        };
      };
      tuningNotesArr++;
    };

    return strings;
  };

  Fretboard.prototype.colorIntervals = function(note, noteIntervalMapping) {
    interval = this.intervalQuery(note, noteIntervalMapping)
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

  return Fretboard;
});