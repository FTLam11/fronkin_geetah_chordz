describe("Fretboard", function() {
  describe("fretboard", function() {
    beforeEach(function() {
      testBoard = new Fretboard(["E", "A", "D", "G", "B", "E"], ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"])
    });

    it("returns a mapping of notes to each fret for a string", function() {
      eString = testBoard.fretboard[0];
      expect(eString).toEqual(["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]);
    });

    it("returns a mapping of notes to each fret for all six strings", function() {
      numStrings = testBoard.fretboard.length
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