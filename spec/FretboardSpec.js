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
});