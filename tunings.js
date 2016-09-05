// 6 string guitars only
// write functions to validate input (chars.length is [6,13), first char cannot be 'b' or '#', no lower case letters except b, invalid chars) 
// suggest tuning/chord to note parser for exercism.io
// root notation takes flat or sharp?

function Tuning(tuning, root) {
  this.name =  this.validateName(tuning);
  this.notes = this.parse(this.name);
  this.notesFlat = this.normalizeToFlat(this.notes);
  this.notesSharp = this.normalizeToSharp(this.notes);
  this.root = root.toUpperCase();
  this.scale = this.intervals();
};

Tuning.prototype.tuningToArr = function() {
  return this.name.split('');
};

Tuning.prototype.validateName = function(tuning) {
  if (this.validLength(tuning) && this.validChars(tuning) && this.validAccidentals(tuning)) {
    return tuning;
  } else {
    return SyntaxError, "The name of this tuning is not valid."
  }
};

Tuning.prototype.validLength = function(tuning) {
  return (tuning.length >= 6 && tuning.length < 13);
};

Tuning.prototype.validChars = function(tuning) {
  return (tuning.match(/[^A-Gb#]/) === null) 
};

Tuning.prototype.validAccidentals = function(tuning) {
  return (tuning.match(/\A[#b]/) === null) && (tuning.match(/[BE]#/) === null) && (tuning.match(/[CF]b/) === null)
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
  var scale = [];
  var currentNoteIndex = notes.indexOf(this.root)
  
  for (var i = 0; i < 12; i++) {
    scale.push(notes[currentNoteIndex]);

    if (currentNoteIndex == 11) {
      currentNoteIndex = 0;
    } else {
      currentNoteIndex++;
    }
  };

  return scale;
};

Tuning.prototype.normalizeToSharp = function() {
  var flatToSharp = {
    "Bb": "A#",
    "Db": "C#",
    "Eb": "D#",
    "Gb": "F#",
    "Ab": "G#"
  };

  var sharpened = this.notes.slice();

  for (var flat in flatToSharp) {
    if (flatToSharp.hasOwnProperty(flat)) {
      if (sharpened.indexOf(flat) > -1) {
        sharpened.splice(sharpened.indexOf(flat), 1, flatToSharp[flat]);
      }
    }
  }

  return sharpened;  
};

Tuning.prototype.normalizeToFlat = function() {
  var sharpToFlat = {
  "A#": "Bb",
  "C#": "Db",
  "D#": "Eb",
  "F#": "Gb",
  "G#": "Ab"  
  };

  var flattened = this.notes.slice();

  for (var sharp in sharpToFlat) {
    if (sharpToFlat.hasOwnProperty(sharp)) {
      if (flattened.indexOf(sharp) > -1) {
        flattened.splice(flattened.indexOf(sharp), 1, sharpToFlat[sharp]);
      }
    }
  }

  return flattened;
};

var notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

var standard = new Tuning("EADGBE", "E");
var eb = new Tuning("EbADGBE", "Eb");
var americanFootball = new Tuning("FACGCE", "F");
var algernonCadwallader = new Tuning("DAEAC#E", "D");
var lute = new Tuning("EADF#BE", "E");
