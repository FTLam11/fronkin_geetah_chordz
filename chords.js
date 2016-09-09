function Chord(name) {
  this.name = name
  this.intervals = this.decompose(name)
  // this.notes = new Tuning
};

/*
Major:
Minor: Cmin, Cmin7, Cmin9
Dominant: C7, C9, C11, C13, Csus, Csus2, Csus4
*/ 

Chord.prototype.name = function() {
  // click from list, don't have to worry Regexing user input
  // parse into array of strings  
};

Chord.prototype.intervals = function(first_argument) {
  // body...
};

Chord.prototype.mapToFretBoard = function(first_argument) {
  // body...
};

Chord.prototype.decompose = function(chordName) {
  // body...
  // JS constant for chord formulas
  var chordFormulas = {
    maj: [1, 3, 5],
    // maj7: this.maj.push(7),
    maj7: [1, 3, 5, 7],
    min: [1, "b3", 5],
  };

  return chordFormulas.chordName
};