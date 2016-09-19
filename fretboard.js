function Fretboard(tuningNotesArr, notesArr) {
  this.fretboard = this.drawNotes(tuningNotesArr, notesArr);
}

Fretboard.prototype.drawNotes = function(tuningNotesArr, notesArr) {
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
// Show notes for all frets
// 


