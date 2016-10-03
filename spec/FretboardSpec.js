describe("Fretboard", function() {
  describe("notes", function() {
    beforeEach(function() {
      testTuning = new Tuning("EADGBE", "E");
      testBoard = new Fretboard(testTuning.notes, testTuning.intervals);
    });

    it("returns a mapping of notes details to each fret for a string", function() {
      eString = testBoard.notes[0];
      expect(eString).toEqual([ { note: 'E', interval: '1', color: '#d10000', chordInterval: undefined }, { note: 'F', interval: 'b2', color: '#FFFDE7', chordInterval: undefined }, { note: 'F#', interval: '2', color: '#ff6622', chordInterval: undefined }, { note: 'G', interval: 'b3', color: '#E5E4D0', chordInterval: undefined }, { note: 'G#', interval: '3', color: '#ffda21', chordInterval: undefined }, { note: 'A', interval: '4', color: '#33dd00', chordInterval: undefined }, { note: 'A#', interval: 'b5', color: '#BFBEAD', chordInterval: undefined }, { note: 'B', interval: '5', color: '#1133cc', chordInterval: undefined }, { note: 'C', interval: '#5', color: '#BAB9A9', chordInterval: undefined }, { note: 'C#', interval: '6', color: '#220066', chordInterval: undefined }, { note: 'D', interval: 'b7', color: '#7F7F74', chordInterval: undefined }, { note: 'D#', interval: '7', color: '#330044', chordInterval: undefined } ]);
    });

    it("returns a mapping of notes to each fret for all six strings", function() {
      numStrings = testBoard.notes.length
      expect(numStrings).toEqual(6);
    });
  });

  describe("colorIntervals()", function() {
    it("returns a color hex code based on the interval of the given note", function() {
      standard = new Tuning("EADGBE", "E");
      expect(Fretboard.prototype.colorIntervals("E", standard.intervals)).toEqual(COLOR_INTERVALS["1"]);
    });
  });

  describe("intervalQuery()", function() {
    it("returns the interval of the given note", function() {
      standard = new Tuning("EADGBE", "E");
      expect(Fretboard.prototype.intervalQuery("E", standard.intervals)).toEqual("1");
    });
  });
});