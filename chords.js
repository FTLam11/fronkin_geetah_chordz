const INTERVAL_SYMBOLS = ["1", "b2", "2", "b3", "3", "4", "b5", "5", "#5", "6", "b7", "7"];

const SHARP_TO_FLAT = {
"A#": "Bb",
"C#": "Db",
"D#": "Eb",
"F#": "Gb",
"G#": "Ab"  
};

function Chord(root, type) {
  this.name = root + type;
  this.intervals = this.chordQuery(type);
  this.root = root;
  this.notes = this.getNotes(this.intervals);
};

Chord.prototype.getNotes = function(intervals) {
  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  var currentNoteIndex = notes.indexOf(this.root);
  var intervalNoteArr = [];

  for (var i = 0; i < INTERVAL_SYMBOLS.length; i++) {
    var noteObj = {};
    
    for (var j = 0; j < intervals.length; j++) {
      if (INTERVAL_SYMBOLS[i] == intervals[j]) {
        noteObj['note'] = [notes[currentNoteIndex]];
        noteObj['interval'] = INTERVAL_SYMBOLS[i];
      
        if (notes[currentNoteIndex].match(/.{1}#/) != null) {
          noteObj['note'].push(SHARP_TO_FLAT[notes[currentNoteIndex]]);
        };

        intervalNoteArr.push(noteObj);
      };
    };

    if (currentNoteIndex == 11) {
      currentNoteIndex = 0;
    } else {
      currentNoteIndex++;
    };
  };
  
  return intervalNoteArr;
};

Chord.prototype.chordQuery = function(type) {
  return CHORD_FORMULAS[type];
};

const CHORD_FORMULAS = {
  maj: ["1", "3", "5"],
  5: ["1", "5"],
  6: ["1", "3", "5", "6"],
  "6/9": ["1", "3", "5", "6", "9"],
  maj7: ["1", "3", "5", "7"],
  maj9: ["1", "3", "5", "7", "9"],
  maj11: ["1", "3", "5", "7", "9", "11"],
  maj13: ["1", "3", "5", "7", "9", "11", "13"],
  add9: ["1", "3", "5", "9"],
  min: ["1", "b3", "5"],
  min6: ["1", "b3", "5", "6"],
  min7: ["1", "b3", "5", "b7"],
  minadd9: ["1", "b3", "5", "9"],
  "min6/9": ["1", "b3", "5", "6", "9"],
  min9: ["1", "b3", "5", "b7", "9"],
  min11: ["1", "b3", "5", "b7", "9", "11"],
  min13: ["1", "b3", "5", "b7", "9", "11", "13"],
  7: ["1", "3", "5", "b7"],
  9: ["1", "3", "5", "b7", "9"],
  maj11: ["1", "3", "5", "b7", "9", "11"],
  maj13: ["1", "3", "5", "b7", "9", "11", "13"],
  "7#5": ["1", "3", "#5", "b7"],
  "7b5": ["1", "3", "b5", "b7"],
  "7#9": ["1", "3", "5", "b7", "#9"],
  "7b9": ["1", "3", "5", "b7", "b9"],
  dim: ["1", "b3", "b5"],
  dim7: ["1", "3", "5", "6"],
  aug: ["1", "3", "#5"],
  aug7: ["1", "3", "#5", "b7"],
  sus2: ["1", "2", "5"],
  sus4: ["1", "4", "5"],
  "7sus4": ["1", "4", "5", "b7"],
  "9sus4": ["1", "4", "5", "b7", "9"]
};