var fretboard = angular.module('geetah');

fretboard.factory('Fretboard', function() {
  const INTERVAL_SYMBOLS = ["1", "b2", "2", "b3", "3", "4", "b5", "5", "#5", "6", "b7", "7"];

  var Fretboard = function(tuningNotesArr, noteObjDetails) {
  this.notes = this.populateNotes(tuningNotesArr, noteObjDetails);
  };

  Fretboard.prototype.populateNotes = function(tuningNotesArr, noteObjDetails) {
    var strings = [[],[],[],[],[],[]];
    var currentNoteIndex = 0;
    var currentTuningNoteIndex = 0;
    var scale = Fretboard.prototype.generateScale(noteObjDetails);

    for (var string = 0; string < 6; string++) {
      currentNoteIndex = scale.indexOf(tuningNotesArr[currentTuningNoteIndex]) + 1;
      if (currentNoteIndex > 11) {
        currentNoteIndex = 11;
      }; 
      for (var fret = 0; fret < 12; fret++) {
        strings[string][fret] = noteObjDetails[currentNoteIndex];
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
    interval = Fretboard.prototype.intervalQuery(note, noteIntervalMapping);
    return COLOR_INTERVALS[interval];
  };

  Fretboard.prototype.intervalQuery = function(note, noteIntervalMapping) {
    for (var key in noteIntervalMapping) {
      if (noteIntervalMapping[key] == note) {
        return key;
      };
    };
  };

  Fretboard.prototype.generateScale = function(noteObjDetails) {
    var scale = [];

    for (var i = 0; i < noteObjDetails.length; i++) {
      scale.push(noteObjDetails[i].note);
    };

    return scale;
  };

  const COLOR_INTERVALS = {
    "1": "#d10000",
    "b2": "#E5E4D0",
    "2": "#ff6622",
    "b3": "#BFBEAD",
    "3": "#ffda21",
    "4": "#33dd00",
    "b5": "#BAB9A9",
    "5": "#1133cc",
    "#5": "#7F7F74",
    "6": "#220066",
    "b7": "#42423D",
    "7": "#60007F"
  };  

  return Fretboard;
});