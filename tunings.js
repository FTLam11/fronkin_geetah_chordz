// suggest tuning/chord to note parser for exercism.io
// var tuning = $('#tuning').value()
// var root = $('#root').value()
// var tuning = new Tuning(tuning, root)
const INTERVAL_SYMBOLS = ["1", "b2", "2", "b3", "3", "4", "b5", "5", "#5", "6", "b7", "7"];

const FLAT_TO_SHARP = {
"Bb": "A#",
"Db": "C#",
"Eb": "D#",
"Gb": "F#",
"Ab": "G#"
};

const SHARP_TO_FLAT = {
"A#": "Bb",
"C#": "Db",
"D#": "Eb",
"F#": "Gb",
"G#": "Ab"  
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

function Tuning(tuning, root) {
  this.name =  this.validateName(tuning);
  this.notes = this.parse(this.name);
  this.flattened = this.normalizeToFlat(this.notes);
  this.sharpened = this.normalizeToSharp(this.notes);
  this.root = this.validateRoot(root);
  this.intervals = this.intervals();
};

Tuning.prototype.tuningToArr = function() {
  return this.name.split('');
};

Tuning.prototype.validateName = function(tuning) {
  if (this.validLength(tuning) && this.validChars(tuning) && this.validAccidentals(tuning)) {
    return tuning;
  } else {
    throw new TuningError("The name of this tuning is not valid.");
  };
};

Tuning.prototype.validLength = function(tuning) {
  return (tuning.length >= 6 && tuning.length < 13);
};

Tuning.prototype.validChars = function(tuning) {
  return (tuning.match(/[^A-Gb#]/) === null); 
};

Tuning.prototype.validAccidentals = function(tuning) {
  return (tuning.match(/^[#b]/) === null) && (tuning.match(/[BE]#/) === null) && (tuning.match(/[CF]b/) === null);
};

Tuning.prototype.parse = function() {
  var tuningArr = this.tuningToArr();

  for (var i = 0; i < tuningArr.length; i++) {
    if (tuningArr[i] == "#") {
      tuningArr[i - 1] = tuningArr[i - 1] + "#";
    } else if (tuningArr[i] == "b") {
      tuningArr[i - 1] = tuningArr[i - 1] + "b";
    };
  };

  return tuningArr.filter(function(char) {
    return ((char != "#") && (char != "b"));
  });  
};

Tuning.prototype.intervals = function() {
  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

  if (this.notes.some(note => note.match(/.{1}b/) != null)) {
    notes = this.normalizeToFlat(notes);
  };

  var noteObjDetails = [];
  var currentNoteIndex = notes.indexOf(this.root);
  
  for (var i = 0; i < 12; i++) {
    var noteObj = {};
    noteObj['note'] = notes[currentNoteIndex];
    noteObj['interval'] = INTERVAL_SYMBOLS[i];
    noteObj['color'] = COLOR_INTERVALS[INTERVAL_SYMBOLS[i]];
    noteObj['chordInterval'] = undefined;
    noteObjDetails.push(noteObj);

    if (currentNoteIndex == 11) {
      currentNoteIndex = 0;
    } else {
      currentNoteIndex++;
    };
  };

  return noteObjDetails;
};

Tuning.prototype.normalizeToSharp = function(notesArr) {
  var sharpened = notesArr.slice();

  for (var i = 0; i < sharpened.length; i++) {
    if (FLAT_TO_SHARP.hasOwnProperty(sharpened[i]) && Object.keys(FLAT_TO_SHARP).indexOf(sharpened[i]) > -1) {
      sharpened.splice(i, 1, FLAT_TO_SHARP[sharpened[i]]);
    };
  };

  return sharpened;  
};

Tuning.prototype.normalizeToFlat = function(notesArr) {
  var flattened = notesArr.slice();

  for (var i = 0; i < flattened.length; i++) {
    if (SHARP_TO_FLAT.hasOwnProperty(flattened[i]) && Object.keys(SHARP_TO_FLAT).indexOf(flattened[i]) > -1) {
      flattened.splice(i, 1, SHARP_TO_FLAT[flattened[i]]);
    };
  };

  return flattened;
};

Tuning.prototype.validateRoot = function(rootNote) {
  if (rootNote.match(/[A-G][#b]?/) != rootNote) {
    throw new RootError("The given root note is invalid.");
  } else {
    rootNote[0].toUpperCase();
  };

  return rootNote;
};

function TuningError(message) {
  this.message = message;
  this.name = "TuningError";
};

function RootError(message) {
  this.message = message;
  this.name = "RootError";
};

// var notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

// var standard = new Tuning("EADGBE", "E");
var eb = new Tuning("EbADGBE", "Eb");
// var americanFootball = new Tuning("FACGCE", "F");
// var algernonCadwallader = new Tuning("DAEAC#E", "D");
// var lute = new Tuning("EADF#BE", "E");
