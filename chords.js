// 1 b2 2 b3 3 4 b5 5 #5 6 b7 7

function Chord(name) {
  this.name = name//this.name()
  this.intervals = this.decompose(name)
  // this.notes = new Tuning
};

/*
Major:
Minor: Cmin, Cmin7, Cmin9
Dominant: C7, C9, C11, C13, Csus, Csus2, Csus4, Cdim
*/ 

Chord.prototype.name = function(chordName) {
  // click from list, don't have to worry Regexing user input
  // parse into array of strings
  // ([A-G])([179][13]?|\w{3})([179][13]?)  
};

Chord.prototype.intervals = function(first_argument) {
  // body...
};

Chord.prototype.mapToFretBoard = function(first_argument) {
  // body...
};

Chord.prototype.decompose = function(chordName) {
  // JS constant for chord formulas
  const CHORD_FORMULAS = {
    maj: ["1", "3", "5"],
    min: ["1", "b3", "5"],
    dim: ["1", "b3", "b5"],
    aug: ["1", "3", "#5"],
    maj7: ["1", "3", "5", "7"],
    min7: ["1", "b3", "5", "b7"],
    dim7: ["1", "3", "5", "6"],
    aug7: ["1", "3", "#5", "b7"],
    dom7: ["1", "3", "5", "b7"],
    5: ["1", "5"],
    6: ["1", "3", "5", "6"],
    6/9: ["1", "3", "5", "6", "9"],

  };

  return CHORD_FORMULAS.chordName
};