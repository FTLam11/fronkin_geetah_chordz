describe("Fretboard", function() {
  describe("notes", function() {
    beforeEach(function() {
      testTuning = new Tuning("EADGBE", "E");
      testBoard = new Fretboard(testTuning.notes, testTuning.intervals);
    });

    it("returns a mapping of notes to each fret for a string", function() {
      eString = testBoard.notes[0];
      expect(eString).toEqual(["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]);
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