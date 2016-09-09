// 6 string guitars only
// write functions to validate input (chars.length is [6,13), first char cannot be 'b' or '#', no lower case letters except b, invalid chars) 
// suggest tuning/chord to note parser for exercism.io
// root notation takes flat or sharp?

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
  }
};

Tuning.prototype.validLength = function(tuning) {
  return (tuning.length >= 6 && tuning.length < 13);
};

Tuning.prototype.validChars = function(tuning) {
  return (tuning.match(/[^A-Gb#]/) === null) 
};

Tuning.prototype.validAccidentals = function(tuning) {
  return (tuning.match(/^[#b]/) === null) && (tuning.match(/[BE]#/) === null) && (tuning.match(/[CF]b/) === null)
};

Tuning.prototype.parse = function() {
  var tuningArr = this.tuningToArr();

  for (var i = 0; i < tuningArr.length; i++) {
    if (tuningArr[i] == "#") {
      tuningArr[i - 1] = tuningArr[i - 1] + "#";
    } else if (tuningArr[i] == "b") {
      tuningArr[i - 1] = tuningArr[i - 1] + "b";
    }
  };

  return tuningArr.filter(function(char) {
    return ((char != "#") && (char != "b"));
  });  
};

Tuning.prototype.intervals = function() {
  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

  if (this.notes.some(note => note.match(/.{1}b/) != null)) {
    notes = this.normalizeToFlat(notes);
  }

  var intervals = [];
  var currentNoteIndex = notes.indexOf(this.root)
  
  for (var i = 0; i < 12; i++) {
    intervals.push(notes[currentNoteIndex]);

    if (currentNoteIndex == 11) {
      currentNoteIndex = 0;
    } else {
      currentNoteIndex++;
    }
  };

  return intervals;
};

Tuning.prototype.normalizeToSharp = function(notesArr) {
  var flatToSharp = {
    "Bb": "A#",
    "Db": "C#",
    "Eb": "D#",
    "Gb": "F#",
    "Ab": "G#"
  };

  var sharpened = notesArr.slice();

  for (var flat in flatToSharp) {
    if (flatToSharp.hasOwnProperty(flat)) {
      if (sharpened.indexOf(flat) > -1) {
        sharpened.splice(sharpened.indexOf(flat), 1, flatToSharp[flat]);
      }
    }
  }

  return sharpened;  
};

Tuning.prototype.normalizeToFlat = function(notesArr) {
  var sharpToFlat = {
  "A#": "Bb",
  "C#": "Db",
  "D#": "Eb",
  "F#": "Gb",
  "G#": "Ab"  
  };

  var flattened = notesArr.slice();

  for (var sharp in sharpToFlat) {
    if (sharpToFlat.hasOwnProperty(sharp)) {
      if (flattened.indexOf(sharp) > -1) {
        flattened.splice(flattened.indexOf(sharp), 1, sharpToFlat[sharp]);
      }
    }
  }

  return flattened;
};

Tuning.prototype.validateRoot = function(rootNote) {
  if (rootNote.match(/[A-G][#b]?/) != rootNote) {
    throw new RootError("The given root note is invalid.");
  } else {
    rootNote[0].toUpperCase();
  }

  return rootNote;
};

function TuningError(message) {
  this.message = message;
  this.name = "TuningError"
};

function RootError(message) {
  this.message = message;
  this.name = "RootError"
};

var notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

var standard = new Tuning("EADGBE", "E");
var eb = new Tuning("EbADGBE", "Eb");
var americanFootball = new Tuning("FACGCE", "F");
var algernonCadwallader = new Tuning("DAEAC#E", "D");
var lute = new Tuning("EADF#BE", "E");
