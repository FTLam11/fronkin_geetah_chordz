var fretboard = angular.module('geetah');

fretboard.factory('Fretboard', function() {
  const INTERVAL_SYMBOLS = ["1", "b2", "2", "b3", "3", "4", "b5", "5", "#5", "6", "b7", "7"];
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

  var Fretboard = function(tuningOpenNotes, tuningNoteIntervals) {
  this.notes = this.populateNotes(tuningOpenNotes, tuningNoteIntervals);
  };

  Fretboard.prototype.populateNotes = function(tuningOpenNotes, tuningNoteIntervals) {
    var strings = [[],[],[],[],[],[]];
    var currentNoteIndex = 0;
    var currentTuningNoteIndex = 0;
    var scale = Fretboard.prototype.generateScale(tuningNoteIntervals);

    for (var string = 0; string < 6; string++) {
      currentNoteIndex = scale.indexOf(tuningOpenNotes[currentTuningNoteIndex]) + 1;
      if (currentNoteIndex > 11) {
        currentNoteIndex = 0;
      }; 
      for (var fret = 0; fret < 12; fret++) {
        strings[string][fret] = tuningNoteIntervals[currentNoteIndex];
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

  Fretboard.prototype.generateScale = function(tuningNoteIntervals) {
    var scale = [];

    for (var i = 0; i < tuningNoteIntervals.length; i++) {
      scale.push(tuningNoteIntervals[i].note);
    };

    return scale;
  };

  return Fretboard;
});